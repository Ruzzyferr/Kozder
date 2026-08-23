const TR_MONTHS = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
];

const TR_WEEKDAYS = [
  'Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi',
];

const EN_MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const EN_WEEKDAYS = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
];

function parseEventDate(dateStr: string): Date | null {
  if (!dateStr) return null;
  const trimmed = dateStr.trim();

  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    const [y, m, d] = trimmed.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  if (/^\d{2}\.\d{2}\.\d{4}$/.test(trimmed)) {
    const [d, m, y] = trimmed.split('.').map(Number);
    return new Date(y, m - 1, d);
  }

  const fallback = new Date(trimmed);
  return isNaN(fallback.getTime()) ? null : fallback;
}

export function getEventDateSortKey(dateStr: string): number {
  const d = parseEventDate(dateStr);
  return d ? d.getTime() : 0;
}

export function formatEventDate(dateStr: string, opts: { weekday?: boolean; lang?: 'tr' | 'en' } = {}): string {
  const trimmed = dateStr?.trim() ?? '';
  const en = opts.lang === 'en';
  const MONTHS = en ? EN_MONTHS : TR_MONTHS;
  const WEEKDAYS = en ? EN_WEEKDAYS : TR_WEEKDAYS;

  // Gün bilgisi olmayan tarihler ("2026", "2025-04") tam tarihmiş gibi
  // gösterilmemeli — new Date() bunları 1 Ocak'a çevirip uydurma bir gün üretiyor.
  if (/^\d{4}$/.test(trimmed)) return trimmed;
  const yearMonth = /^(\d{4})-(\d{2})$/.exec(trimmed);
  if (yearMonth) {
    const month = MONTHS[Number(yearMonth[2]) - 1];
    return month ? `${month} ${yearMonth[1]}` : trimmed;
  }

  const d = parseEventDate(dateStr);
  if (!d) return dateStr;
  const day = d.getDate();
  const month = MONTHS[d.getMonth()];
  const year = d.getFullYear();
  const base = en ? `${month} ${day}, ${year}` : `${day} ${month} ${year}`;
  return opts.weekday ? `${WEEKDAYS[d.getDay()]}, ${base}` : base;
}

export function formatEventTime(time?: string): string | null {
  if (!time) return null;
  const trimmed = time.trim();
  return /^\d{1,2}:\d{2}$/.test(trimmed) ? trimmed : trimmed;
}
