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

export const EVENT_WEEKDAYS = [
  'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday',
] as const;

export type EventWeekday = (typeof EVENT_WEEKDAYS)[number];

interface RecurringEventDateOptions {
  recurring?: 'weekly';
  weekday?: EventWeekday;
  time?: string;
  timezone?: string;
  now?: Date;
}

function timezoneParts(now: Date, timezone: string) {
  const read = (zone: string) => {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: zone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    }).formatToParts(now);
    const value = (type: Intl.DateTimeFormatPartTypes) => parts.find(part => part.type === type)?.value ?? '';
    return {
      year: Number(value('year')),
      month: Number(value('month')),
      day: Number(value('day')),
      weekday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(value('weekday')),
      hour: Number(value('hour')),
      minute: Number(value('minute')),
    };
  };

  try {
    return read(timezone);
  } catch {
    return read('Europe/Istanbul');
  }
}

export function getNextWeeklyEventDate(
  weekday: EventWeekday,
  time = '00:00',
  timezone = 'Europe/Istanbul',
  now = new Date(),
): string {
  const current = timezoneParts(now, timezone);
  const targetWeekday = EVENT_WEEKDAYS.indexOf(weekday);
  const [eventHour = 0, eventMinute = 0] = /^\d{1,2}:\d{2}$/.test(time)
    ? time.split(':').map(Number)
    : [0, 0];

  let daysAhead = (targetWeekday - current.weekday + 7) % 7;
  const eventMinutes = eventHour * 60 + eventMinute;
  const currentMinutes = current.hour * 60 + current.minute;

  // Etkinlik saati geldiğinde kart bir sonraki haftanın tarihine geçer.
  if (daysAhead === 0 && currentMinutes >= eventMinutes) daysAhead = 7;

  const result = new Date(Date.UTC(current.year, current.month - 1, current.day + daysAhead));
  return `${result.getUTCFullYear()}-${String(result.getUTCMonth() + 1).padStart(2, '0')}-${String(result.getUTCDate()).padStart(2, '0')}`;
}

export function getEffectiveEventDate(dateStr: string, opts: RecurringEventDateOptions = {}): string {
  if (opts.recurring === 'weekly' && opts.weekday) {
    return getNextWeeklyEventDate(
      opts.weekday,
      opts.time,
      opts.timezone ?? 'Europe/Istanbul',
      opts.now,
    );
  }
  return dateStr;
}

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
