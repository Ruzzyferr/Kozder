import { getEntryAddedTime } from './fileTime';
import { getEventDateSortKey } from './date';

export type CollectionName = 'projects' | 'events' | 'posts' | 'news' | 'stories';

/**
 * Comparator that puts the most recently ADDED entry first — fully automatic,
 * no manual date fields required (see fileTime.ts).
 *
 * `dateField` (optional) is a frontmatter key used only as a fallback when git
 * add-times are unavailable or tied, so order stays deterministic.
 */
export function byNewest<T extends { id: string; data: Record<string, any> }>(
  collection: CollectionName,
  dateField?: string,
) {
  return (a: T, b: T): number => {
    const t = getEntryAddedTime(collection, b.id) - getEntryAddedTime(collection, a.id);
    if (t !== 0) return t;
    if (dateField) {
      const d = getEventDateSortKey(b.data[dateField]) - getEventDateSortKey(a.data[dateField]);
      if (d !== 0) return d;
    }
    return a.id.localeCompare(b.id);
  };
}
