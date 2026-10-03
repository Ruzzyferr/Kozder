/**
 * Sayfadaki sayıları görünür olduklarında 0'dan gerçek değerine kadar sayar.
 * Sunucu çıktısı gerçek değeri içerir; JS yoksa veya kullanıcı hareketi
 * azaltmayı seçtiyse sayılar olduğu gibi kalır.
 */
const NUM = /\d{1,3}(?:[.,\u202f\u00a0]\d{3})+(?:[.,]\d+)?|\d+(?:[.,]\d+)?/;

function firstNumberNode(el: Element): Text | null {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let n: Node | null;
  while ((n = walker.nextNode())) {
    if (NUM.test(n.textContent ?? '')) return n as Text;
  }
  return null;
}

export function initCountUp(selector: string, duration = 1200) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;
  const tr = (document.documentElement.lang || 'tr').startsWith('tr');
  const thou = tr ? '.' : ',';
  const dec = tr ? ',' : '.';

  type Item = { node: Text; before: string; after: string; target: number; decimals: number };
  const items = new Map<Element, Item>();

  document.querySelectorAll(selector).forEach(el => {
    if (items.has(el)) return;
    const node = firstNumberNode(el);
    if (!node) return;
    const text = node.textContent ?? '';
    const m = text.match(NUM);
    if (!m || m.index === undefined) return;
    const raw = m[0].replace(/[\u202f\u00a0]/g, thou);
    const parts = raw.split(dec);
    const intPart = parts[0].split(thou).join('');
    const decimals = parts.length > 1 ? parts[1].length : 0;
    const target = Number(`${intPart}${decimals ? '.' + parts[1] : ''}`);
    if (!Number.isFinite(target) || target === 0) return;
    // Yıl gibi görünen tek başına dört haneli sayıları sayma (2025 vb.).
    if (!decimals && /^(19|20)\d{2}$/.test(intPart) && text.trim() === m[0]) return;
    items.set(el, { node, before: text.slice(0, m.index), after: text.slice(m.index + m[0].length), target, decimals });
  });

  const fmt = (v: number, d: number) =>
    new Intl.NumberFormat(tr ? 'tr-TR' : 'en-IE', { minimumFractionDigits: d, maximumFractionDigits: d }).format(v);

  items.forEach(it => (it.node.textContent = it.before + fmt(0, it.decimals) + it.after));

  const run = (it: Item) => {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      it.node.textContent = it.before + fmt(it.target * eased, it.decimals) + it.after;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const it = items.get(e.target);
      if (it) run(it);
    });
  }, { threshold: 0.4 });
  items.forEach((_, el) => io.observe(el));
}
