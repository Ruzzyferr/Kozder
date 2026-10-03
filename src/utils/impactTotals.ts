import impact from '../data/impact.json';

/** Etki sayfası ve ana sayfada aynı toplamların kullanılması için. */
export function impactTotals() {
  const esc = (impact.escLead.rows as any[]).reduce((a, r) => a + r.volunteers, 0);
  const rows = impact.sending.rows as any[];
  const sendEsc = rows.reduce((a, r) => a + r.esc, 0);
  const sendErasmus = rows.reduce((a, r) => a + r.erasmus, 0);
  const hosted = (impact.hosting as any[]).reduce((a, r) => a + r.participants, 0);
  return { esc, sendEsc, sendErasmus, sending: sendEsc + sendErasmus, abroad: esc + sendEsc + sendErasmus, hosted };
}
