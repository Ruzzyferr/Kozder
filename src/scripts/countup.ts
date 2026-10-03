/**
 * Sayıları görünür olduklarında 0'dan gerçek değerine kadar sayar.
 * Sunucu çıktısı gerçek değeri içerir; JS yoksa veya kullanıcı hareketi
 * azaltmayı seçtiyse sayılar olduğu gibi kalır.
 */
const NUM = /\d{1,3}(?:[.,\u202f\u00a0]\d{3})+(?:[.,]\d+)?|\d+(?:[.,]\d+)?/;
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

type Item = { node: Text; before: string; after: string; target: number; decimals: number; tr: boolean };

function firstNumberNode(el: Element): Text | null {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let n: Node | null;
  while ((n = walker.nextNode())) if (NUM.test(n.textContent ?? '')) return n as Text;
  return null;
}

const fmt = (v: number, d: number, tr: boolean) =>
  new Intl.NumberFormat(tr ? 'tr-TR' : 'en-IE', { minimumFractionDigits: d, maximumFractionDigits: d }).format(v);

function prepare(el: Element): Item | null {
  const tr = (document.documentElement.lang || 'tr').startsWith('tr');
  const thou = tr ? '.' : ',';
  const dec = tr ? ',' : '.';
  const node = firstNumberNode(el);
  if (!node) return null;
  const text = node.textContent ?? '';
  const m = text.match(NUM);
  if (!m || m.index === undefined) return null;
  const raw = m[0].replace(/[\u202f\u00a0]/g, thou);
  const parts = raw.split(dec);
  const intPart = parts[0].split(thou).join('');
  const decimals = parts.length > 1 ? parts[1].length : 0;
  const target = Number(`${intPart}${decimals ? '.' + parts[1] : ''}`);
  if (!Number.isFinite(target) || target === 0) return null;
  if (!decimals && /^(19|20)\d{2}$/.test(intPart) && text.trim() === m[0]) return null;
  const it = { node, before: text.slice(0, m.index), after: text.slice(m.index + m[0].length), target, decimals, tr };
  node.textContent = it.before + fmt(0, decimals, tr) + it.after;
  return it;
}

function run(it: Item, duration: number) {
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    it.node.textContent = it.before + fmt(it.target * (1 - Math.pow(1 - p, 3)), it.decimals, it.tr) + it.after;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/** Her öğe kendi görünürlüğünde sayar. */
export function initCountUp(selector: string, duration = 1200) {
  if (reduced() || !('IntersectionObserver' in window)) return;
  const items = new Map<Element, Item>();
  document.querySelectorAll(selector).forEach(el => {
    if (el.closest('.seq')) return; // sıralı gruplar kendi animasyonunu yönetir
    const it = prepare(el);
    if (it) items.set(el, it);
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const it = items.get(e.target);
      if (it) run(it, duration);
    });
  }, { threshold: 0.4 });
  items.forEach((_, el) => io.observe(el));
}

/**
 * Bir grubun içindeki .seq öğeleri sırayla belirir ve içlerindeki sayılar
 * peş peşe sayar. Grup ekrana girince başlar.
 */
export function initSequence(rootSelector: string, numberSelector = '.stat-value', step = 140, duration = 1000) {
  const roots = Array.from(document.querySelectorAll<HTMLElement>(rootSelector));
  if (!roots.length) return;
  if (reduced() || !('IntersectionObserver' in window)) {
    roots.forEach(r => r.querySelectorAll('.seq').forEach(el => el.classList.add('is-in')));
    return;
  }
  roots.forEach(root => {
    const seqs = Array.from(root.querySelectorAll<HTMLElement>('.seq'));
    if (root.classList.contains('seq')) seqs.unshift(root);
    const prepared = seqs.map(el => {
      el.classList.add('seq-wait');
      const nums = el.matches(numberSelector) ? [el] : Array.from(el.querySelectorAll(numberSelector));
      return { el, its: nums.map(n => prepare(n)).filter((x): x is Item => !!x) };
    });
    const io = new IntersectionObserver(entries => {
      if (!entries.some(e => e.isIntersecting)) return;
      io.disconnect();
      prepared.forEach(({ el, its }, i) => {
        window.setTimeout(() => {
          el.classList.add('is-in');
          its.forEach(it => run(it, duration));
        }, i * step);
      });
    }, { threshold: 0.15 });
    io.observe(root);
  });
}
