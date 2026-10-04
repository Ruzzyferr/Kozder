/**
 * Yayın sırasında her fotoğraf için telefona uygun küçük WebP kopyalar üretir:
 *   public/images/x/foto.jpeg  ->  public/_r/images/x/foto-480.webp, foto-960.webp
 * Kopyalar git'e girmez (.gitignore), her yayında yeniden üretilir.
 * Sitedeki <img> etiketleri bu kopyaları srcset ile kullanır (src/utils/responsive.ts).
 */
import { readdir, stat, mkdir } from 'node:fs/promises';
import { join, relative, dirname, extname } from 'node:path';
import sharp from 'sharp';

const ROOT = 'public';
const SRC = join(ROOT, 'images');
const OUT = join(ROOT, '_r');
const WIDTHS = [480, 960];
const EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (EXT.has(extname(e.name).toLowerCase())) yield p;
  }
}

let made = 0, skipped = 0;
for await (const file of walk(SRC)) {
  let meta;
  try { meta = await sharp(file).metadata(); } catch { continue; }
  const w0 = meta.autoOrient?.width ?? meta.width ?? 0;
  const rel = relative(ROOT, file).replace(/\.[^.]+$/, '');
  for (const w of WIDTHS) {
    if (w0 && w0 <= w) continue; // küçük görseli büyütme
    const out = join(OUT, `${rel}-${w}.webp`);
    try { await stat(out); skipped++; continue; } catch {}
    await mkdir(dirname(out), { recursive: true });
    await sharp(file).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 72 }).toFile(out);
    made++;
  }
}
console.log(`[responsive-images] ${made} kopya üretildi, ${skipped} zaten vardı`);
