import { execSync } from 'node:child_process';

/**
 * Automatic "newest added first" ordering for content collections.
 *
 * Each entry's order is derived from the git commit that first ADDED the file
 * (one `git log` call per collection, parsed into a map). This needs zero
 * manual date fields — adding a file in its own commit makes it sort to the top.
 *
 * Notes:
 * - No `--follow`: rename detection needs blob content, which breaks on Vercel's
 *   partial (`--filter=blob:none`) clone and was the reason the previous
 *   git-based sort was abandoned. We only read commit metadata, which works
 *   reliably after the build's `git fetch --unshallow`.
 * - No `--diff-filter=A`: a merge commit in history breaks "added" attribution
 *   (files merged in from another branch get no A record). Instead we take the
 *   OLDEST commit that touched each file, which equals its creation time.
 * - If git history is unavailable, every entry resolves to 0 and callers fall
 *   back to a date field / id, so ordering stays deterministic (never random).
 */

const COLLECTION_DIRS: Record<string, string> = {
  projects: 'src/content/projects',
  events: 'src/content/events',
  posts: 'src/content/posts',
  news: 'src/content/news',
  stories: 'src/content/stories',
};

const collectionCache = new Map<string, Map<string, number>>();

function loadCollection(collection: string): Map<string, number> {
  const cached = collectionCache.get(collection);
  if (cached) return cached;

  const map = new Map<string, number>();
  const dir = COLLECTION_DIRS[collection];
  if (dir) {
    try {
      // Newest commit first. Each `%ct` line sets the current time, the
      // following path lines are files touched in that commit. Because we
      // iterate newest -> oldest and overwrite, each file ends up with its
      // OLDEST (creation) time. Merge commits list no files, so they're skipped.
      const out = execSync(
        `git log --name-only --format=%ct -- "${dir}"`,
        { stdio: ['pipe', 'pipe', 'ignore'], cwd: process.cwd(), maxBuffer: 32 * 1024 * 1024 }
      ).toString();

      let curTime = 0;
      for (const raw of out.split('\n')) {
        const line = raw.trim();
        if (!line) continue;
        if (/^\d+$/.test(line)) {
          curTime = parseInt(line, 10);
          continue;
        }
        // line is a repo-relative path like "src/content/stories/anil-asci.mdx"
        const id = line.slice(dir.length + 1);
        if (id) map.set(id, curTime * 1000);
      }
    } catch {}
  }

  collectionCache.set(collection, map);
  return map;
}

/** Time (ms epoch) the entry was first added to the repo, or 0 if unknown. */
export function getEntryAddedTime(collection: string, id: string): number {
  return loadCollection(collection).get(id) ?? 0;
}
