// Prebuild step (runs first): delete Astro's content cache so every build
// regenerates it from the current files on disk.
//
// Why: Astro persists a content "data store" (node_modules/.astro/data-store.json)
// and a module map (.astro/content-modules.mjs). When a content file is renamed
// or removed (e.g. the .mdx -> .md rename), a stale cache keeps pointing at the
// old path and the build fails with "Rollup failed to resolve ...old-name.mdx".
// On Vercel this can be restored from the build cache and break a deploy that
// works on a clean checkout. Wiping it here is cheap (a full content re-scan of
// ~50 small files) and makes the build deterministic.

import { rmSync } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const targets = ['.astro', 'node_modules/.astro'];
for (const t of targets) {
  try { rmSync(path.join(ROOT, t), { recursive: true, force: true }); } catch {}
}
console.log('[clean-content-cache] cleared stale Astro content cache');
