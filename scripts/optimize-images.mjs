// Prebuild step: shrink oversized images in public/ IN PLACE, keeping the same
// filename and extension. KOZ-DER uploads normal phone photos (.jpg/.png) via
// GitHub and references them by their real name — this makes the served file
// small without anyone having to convert to WebP or touch the reference.
//
// How it stays fast & safe:
// - Only files that are actually big are touched (over MAX_DIM on a side OR
//   over SIZE_LIMIT bytes). Already-optimized images fall under both limits and
//   are SKIPPED, so re-builds don't re-process the whole library.
// - Same extension in, same extension out (.jpg stays .jpg) — references never
//   break. EXIF orientation is baked in (.rotate) and metadata (incl. GPS) is
//   stripped, so phone photos show upright and don't leak location.
// - Source files in git never change here (this runs on the ephemeral build
//   machine), so re-encoding is deterministic — no progressive quality loss.
// - A single bad image only warns; it never fails the deploy.

import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');
const MAX_DIM = 1600;            // longest side, px
const QUALITY = 80;             // jpeg/webp quality
const SIZE_LIMIT = 600 * 1024;   // bytes — anything bigger is a candidate
const EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.warn('[optimize-images] sharp not available — skipping image optimization');
  process.exit(0);
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (EXTS.has(path.extname(name).toLowerCase())) out.push(full);
  }
  return out;
}

let processed = 0, skipped = 0, savedBytes = 0;

for (const file of walk(PUBLIC_DIR)) {
  try {
    const ext = path.extname(file).toLowerCase();
    // Read into a buffer so sharp never holds a handle on the path — on Windows
    // that lock makes writing the optimized result back fail with EPERM.
    const input = readFileSync(file);
    const origSize = input.length;
    const meta = await sharp(input).metadata();
    const tooBig = (meta.width ?? 0) > MAX_DIM || (meta.height ?? 0) > MAX_DIM;
    const tooHeavy = origSize > SIZE_LIMIT;
    if (!tooBig && !tooHeavy) { skipped++; continue; }

    let pipeline = sharp(input).rotate().resize({
      width: MAX_DIM, height: MAX_DIM, fit: 'inside', withoutEnlargement: true,
    });
    if (ext === '.png') pipeline = pipeline.png({ compressionLevel: 9, palette: true });
    else if (ext === '.webp') pipeline = pipeline.webp({ quality: QUALITY });
    else pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });

    const buf = await pipeline.toBuffer();
    if (buf.length >= origSize) { skipped++; continue; } // never make a file bigger

    writeFileSync(file, buf);
    processed++;
    savedBytes += origSize - buf.length;
    const rel = path.relative(ROOT, file).replace(/\\/g, '/');
    console.log(`[optimize-images] ${rel}: ${(origSize / 1024 / 1024).toFixed(2)}MB -> ${(buf.length / 1024).toFixed(0)}KB`);
  } catch (err) {
    console.warn(`[optimize-images] skipped ${path.relative(ROOT, file)}: ${err.message}`);
  }
}

console.log(`[optimize-images] done — ${processed} optimized, ${skipped} already-ok, saved ${(savedBytes / 1024 / 1024).toFixed(1)}MB`);
