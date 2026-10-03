import impact from '../data/impact.json';

/** Etki sayfası ve ana sayfada aynı toplamların kullanılması için. */
export function impactTotals() {
  const esc = (impact.escLead.rows as any[]).reduce((a, r) => a + r.volunteers, 0);
  const rows = impact.sending.rows as any[];
  const sendEsc = rows.reduce((a, r) => a + r.esc, 0);
  const sendErasmus = rows.reduce((a, r) => a + r.erasmus, 0);
  const hosted = (impact.hosting as any[]).reduce((a, r) => a + r.participants, 0);
  // Kendi ESC projelerimiz ve gönderici olduğumuz projelerdeki ülkeler (tekil).
  const names = new Set<string>();
  (impact.escLead.rows as any[]).forEach(r => String(r.countries_tr).split(',').forEach(x => names.add(x.trim().replace(/\s\d+$/, ''))));
  rows.forEach(r => String(r.where_tr).replace(/ESC:|Erasmus\+:/g, ',').split(/[,·]/).forEach(x => { const n = x.trim().replace(/\s\d+$/, '').replace(/^Ekim 2026\s/, ''); if (n && !/dönem/i.test(n)) names.add(n.split('/').pop()!.trim()); }));
  return { countries: names.size, countryNames: [...names], esc, sendEsc, sendErasmus, sending: sendEsc + sendErasmus, abroad: esc + sendEsc + sendErasmus, hosted };
}
