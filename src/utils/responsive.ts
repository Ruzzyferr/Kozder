import { existsSync } from 'node:fs';
import { join } from 'node:path';

const WIDTHS = [480, 960];
const OK = /^\/images\/.+\.(jpe?g|png|webp)$/i;

const variant = (src: string, w: number) => `/_r${src.replace(/\.[^.]+$/, '')}-${w}.webp`;
const exists = (url: string) => existsSync(join(process.cwd(), 'public', url));

/**
 * Telefon için küçük WebP kopyalarla srcset üretir. Kopya yoksa (ör. yerel
 * geliştirmede scripts/responsive-images.mjs çalışmadıysa) undefined döner
 * ve görsel eskisi gibi tek kaynaktan yüklenir.
 */
export function srcsetFor(src?: string): string | undefined {
  if (!src || !OK.test(src)) return undefined;
  const parts = WIDTHS.filter(w => exists(variant(src, w))).map(w => `${variant(src, w)} ${w}w`);
  if (!parts.length) return undefined;
  return [...parts, `${src} 1600w`].join(', ');
}

/** Arka plan görseli gibi tek bir kaynak gereken yerler için en uygun küçük kopya. */
export function smallFor(src?: string, w = 960): string | undefined {
  if (!src || !OK.test(src)) return src;
  const v = variant(src, w);
  return exists(v) ? v : src;
}
