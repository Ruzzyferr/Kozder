// Prebuild step: compute the git "first added" time for every content entry
// and write it to src/data/added-times.json.
//
// Why a prebuild script (not a call from inside the Astro build):
// - It runs in the plain shell, AFTER the platform build command's
//   `git fetch --unshallow`, so git + full history are available here even
//   though they are not reliably reachable from inside Astro's module eval on
//   Vercel's shallow/partial clone.
// - The generated JSON is committed, so even if git is unavailable at build
//   time the last-known-good ordering still ships (script keeps old entries).

import { execSync } from 'node:child_process';
import { readdirSync, statSync, existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'src/data/added-times.json');
const COLLECTION_DIRS = {
  projects: 'src/content/projects',
  events: 'src/content/events',
  posts: 'src/content/posts',
  news: 'src/content/news',
  stories: 'src/content/stories',
};

// Start from existing data so a git failure never wipes known times.
let times = {};
if (existsSync(OUT)) {
  try { times = JSON.parse(readFileSync(OUT, 'utf8')); } catch {}
}

let gitOk = false;
for (const [collection, dir] of Object.entries(COLLECTION_DIRS)) {
  const abs = path.join(ROOT, dir);
  if (!existsSync(abs)) continue;

  // Map of currently existing files in this collection. Recurses so that
  // language subfolders (e.g. projects/en/foo.md) are tracked too.
  const walk = (base, prefix = '') =>
    readdirSync(base).flatMap(name => {
      const full = path.join(base, name);
      const rel = prefix ? `${prefix}/${name}` : name;
      return statSync(full).isDirectory() ? walk(full, rel) : [rel];
    });
  const present = new Set(walk(abs));

  // Earliest known time wins (Math.min vs any value already in the manifest).
  // No --diff-filter=A (merge commits break "A" attribution) and no --follow
  // (needs blobs). Taking the min also preserves the original add-time across a
  // file rename (e.g. .mdx -> .md): git would otherwise report the rename commit
  // as the new path's oldest commit, but the committed manifest still holds the
  // true first-added time, and min keeps it.
  let out = '';
  try {
    out = execSync(`git log --format=%ct --name-only -- "${dir}"`, {
      stdio: ['pipe', 'pipe', 'ignore'], cwd: ROOT, maxBuffer: 64 * 1024 * 1024,
    }).toString();
  } catch {
    continue; // keep previously known times for this collection
  }

  let curTime = 0;
  for (const raw of out.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (/^\d+$/.test(line)) { curTime = parseInt(line, 10); continue; }
    const id = line.slice(dir.length + 1);
    if (id && present.has(id)) {
      const key = `${collection}/${id}`;
      const t = curTime * 1000;
      times[key] = key in times ? Math.min(times[key], t) : t;
      gitOk = true;
    }
  }
}

mkdirSync(path.dirname(OUT), { recursive: true });
const sorted = Object.fromEntries(Object.entries(times).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(OUT, JSON.stringify(sorted, null, 2) + '\n');
console.log(`[gen-added] ${Object.keys(sorted).length} entries written (git ${gitOk ? 'OK' : 'unavailable — kept existing'})`);
