function pad(n: number) {
  return n.toString().padStart(2, '0');
}

function toICSDate(date: Date, allDay: boolean): string {
  if (allDay) {
    return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`;
  }
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}00`;
}

function escapeICS(s: string) {
  return s.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}

export interface IcsEvent {
  uid: string;
  title: string;
  description: string;
  location: string;
  start: Date;
  end?: Date;
  url?: string;
  allDay?: boolean;
}

export function buildIcsString(ev: IcsEvent): string {
  const allDay = !!ev.allDay;
  const start = toICSDate(ev.start, allDay);
  const end = toICSDate(ev.end ?? new Date(ev.start.getTime() + 60 * 60 * 1000), allDay);
  const stamp = toICSDate(new Date(), false);
  const dtPrefix = allDay ? ';VALUE=DATE' : '';

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//KOZ-DER//Etkinlik//TR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${ev.uid}`,
    `DTSTAMP:${stamp}Z`,
    `DTSTART${dtPrefix}:${start}`,
    `DTEND${dtPrefix}:${end}`,
    `SUMMARY:${escapeICS(ev.title)}`,
    `DESCRIPTION:${escapeICS(ev.description)}`,
    `LOCATION:${escapeICS(ev.location)}`,
    ev.url ? `URL:${ev.url}` : '',
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean);

  return lines.join('\r\n');
}

export function googleCalendarUrl(ev: IcsEvent): string {
  const allDay = !!ev.allDay;
  const start = toICSDate(ev.start, allDay);
  const end = toICSDate(ev.end ?? new Date(ev.start.getTime() + 60 * 60 * 1000), allDay);
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: ev.title,
    dates: `${start}/${end}`,
    details: ev.description,
    location: ev.location,
  });
  if (ev.url) params.set('sprop', `website:${ev.url}`);
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function buildEventStartDate(date: string, time?: string): Date | null {
  if (!date) return null;
  const trimmed = date.trim();
  let y: number, m: number, d: number;

  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    [y, m, d] = trimmed.split('-').map(Number);
  } else if (/^\d{2}\.\d{2}\.\d{4}$/.test(trimmed)) {
    [d, m, y] = trimmed.split('.').map(Number);
  } else {
    const fb = new Date(trimmed);
    return isNaN(fb.getTime()) ? null : fb;
  }

  let hh = 9;
  let mm = 0;
  let allDay = true;
  if (time && /^\d{1,2}:\d{2}$/.test(time.trim())) {
    [hh, mm] = time.trim().split(':').map(Number);
    allDay = false;
  }
  const dt = new Date(y, m - 1, d, hh, mm);
  (dt as any).__allDay = allDay;
  return dt;
}

export function isAllDay(d: Date): boolean {
  return !!(d as any).__allDay;
}
