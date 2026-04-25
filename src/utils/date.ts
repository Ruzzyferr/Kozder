const TR_MONTHS = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
];

const TR_WEEKDAYS = [
  'Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi',
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

export function formatEventDate(dateStr: string, opts: { weekday?: boolean } = {}): string {
  const d = parseEventDate(dateStr);
  if (!d) return dateStr;
  const day = d.getDate();
  const month = TR_MONTHS[d.getMonth()];
  const year = d.getFullYear();
  const base = `${day} ${month} ${year}`;
  return opts.weekday ? `${TR_WEEKDAYS[d.getDay()]}, ${base}` : base;
}

export function formatEventTime(time?: string): string | null {
  if (!time) return null;
  const trimmed = time.trim();
  return /^\d{1,2}:\d{2}$/.test(trimmed) ? trimmed : trimmed;
}
