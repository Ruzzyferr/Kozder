import type { Lang } from '../i18n';

export type ProgramType = 'ESC' | 'ERASMUS' | 'LOCAL';

/**
 * Proje kartlarında ve filtrelerde gösterilen program etiketi.
 * LOCAL: KOZ-DER'in Kilis'teki / çevrim içi kendi gönüllülük çağrıları —
 * Erasmus+ veya ESC fonlu değildir, o yüzden AB programı etiketi taşımaz.
 */
export function programLabel(type: ProgramType, lang: Lang): string {
  if (type === 'ESC') return 'ESC';
  if (type === 'ERASMUS') return 'Erasmus+';
  return lang === 'en' ? 'Local volunteering' : 'Yerel gönüllülük';
}
