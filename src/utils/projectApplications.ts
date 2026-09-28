export interface ProjectApplicationData {
  status: 'Aktif' | 'Tamamlandı';
  startDate: string;
  applicationDeadline?: string;
}

// Derneğin çağrıları Türkiye saatine göre kapanır; ziyaretçinin cihaz saat dilimi
// ve sitenin en son derlendiği gün sonucu değiştirmemelidir.
function turkeyDate(value: string, endOfDay: boolean): number | null {
  const iso = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  const local = value.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  const year = Number(iso?.[1] ?? local?.[3]);
  const month = Number(iso?.[2] ?? local?.[2]);
  const day = Number(iso?.[3] ?? local?.[1]);
  if (!year || !month || !day) return null;

  const parsed = Date.UTC(year, month - 1, day);
  const checked = new Date(parsed);
  if (checked.getUTCFullYear() !== year || checked.getUTCMonth() !== month - 1 || checked.getUTCDate() !== day) return null;

  return parsed - 3 * 60 * 60 * 1000 + (endOfDay ? 24 * 60 * 60 * 1000 : 0);
}

export function isProjectApplicationOpen(project: ProjectApplicationData, now = Date.now()): boolean {
  if (project.status !== 'Aktif') return false;
  // Son başvuru tarihi girilmişse günün sonuna kadar başvuru alınır. Girilmemişse
  // faaliyet başladığında çağrı kapanır; endDate başvuru tarihi değildir.
  const closesAt = project.applicationDeadline
    ? turkeyDate(project.applicationDeadline, true)
    : turkeyDate(project.startDate, false);
  return closesAt !== null && now < closesAt;
}
