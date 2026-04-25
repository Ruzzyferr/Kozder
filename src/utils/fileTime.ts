import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const cache = new Map<string, number>();

const COLLECTION_DIRS: Record<string, string> = {
  projects: 'src/content/projects',
  events: 'src/content/events',
  posts: 'src/content/posts',
  stories: 'src/content/stories',
};

/**
 * Returns the time (ms epoch) when a content entry was first added to the repo.
 * Uses `git log --diff-filter=A --follow` to find the original add commit
 * (also traces rename history). Falls back to file mtime, then 0.
 */
export function getEntryAddedTime(collection: string, id: string): number {
  const key = `${collection}/${id}`;
  if (cache.has(key)) return cache.get(key)!;

  const dir = COLLECTION_DIRS[collection];
  if (!dir) {
    cache.set(key, 0);
    return 0;
  }
  const relPath = path.posix.join(dir, id);
  let ts = 0;

  try {
    const out = execSync(
      `git log --diff-filter=A --follow --format=%at -- "${relPath}"`,
      { stdio: ['pipe', 'pipe', 'ignore'], cwd: process.cwd() }
    ).toString().trim();
    if (out) {
      const lines = out.split('\n').filter(Boolean);
      const oldest = lines[lines.length - 1];
      const parsed = parseInt(oldest, 10);
      if (!isNaN(parsed)) ts = parsed * 1000;
    }
  } catch {}

  if (!ts) {
    try {
      const stat = fs.statSync(path.join(process.cwd(), relPath));
      ts = stat.birthtimeMs || stat.mtimeMs || 0;
    } catch {}
  }

  cache.set(key, ts);
  return ts;
}
