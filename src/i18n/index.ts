import { ui, defaultLang, type Lang, type UIKey } from './ui';

export { languages, defaultLang } from './ui';
export type { Lang } from './ui';
export { usePage, pageContent } from './pages';
export type { FaqItem, PrivacySection } from './pages';

/** URL yolundan dili çıkarır. Türkçe kökte, İngilizce /en/ altında. */
export function getLangFromUrl(url: URL): Lang {
  return url.pathname.startsWith('/en/') || url.pathname === '/en' ? 'en' : defaultLang;
}

/** Arayüz metni. Anahtar eksikse Türkçesine düşer — sayfa asla boş kalmaz. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

/**
 * Sayfa yollarını dile göre üretir. Türkçe rotalar sabit kalır (mevcut
 * bağlantılar ve SEO bozulmasın), İngilizce olanlar /en/ altına ve İngilizce
 * dilim adlarına gider.
 */
const ROUTES = {
  home: { tr: '/', en: '/en/' },
  about: { tr: '/hakkimizda', en: '/en/about' },
  projects: { tr: '/projeler', en: '/en/projects' },
  stories: { tr: '/gonullu-hikayeleri', en: '/en/stories' },
  events: { tr: '/etkinlikler', en: '/en/events' },
  news: { tr: '/haberler', en: '/en/news' },
  posts: { tr: '/duyurular', en: '/en/announcements' },
  faq: { tr: '/sss', en: '/en/faq' },
  contact: { tr: '/iletisim', en: '/en/contact' },
  links: { tr: '/baglantilar', en: '/en/links' },
  privacy: { tr: '/kvkk', en: '/en/privacy' },
} as const;

export type RouteKey = keyof typeof ROUTES;

export function path(lang: Lang, key: RouteKey): string {
  return ROUTES[key][lang] ?? ROUTES[key].tr;
}

/** Bir içerik girdisinin detay yolu. */
export function entryPath(lang: Lang, key: RouteKey, slug: string): string {
  const base = path(lang, key);
  return `${base.replace(/\/$/, '')}/${slug}`;
}

/** Aynı sayfanın diğer dildeki karşılığı — dil düğmesi ve hreflang için. */
export function alternatePath(lang: Lang, key: RouteKey, slug?: string): string {
  const other: Lang = lang === 'tr' ? 'en' : 'tr';
  return slug ? entryPath(other, key, slug) : path(other, key);
}

/**
 * İçerik koleksiyonlarında İngilizce girdiler `en/` alt klasöründe durur.
 * Türkçe listelerde bunları ayıklamak, İngilizce listelerde ise yalnızca
 * bunları almak için.
 */
export const isEnEntry = (slug: string) => slug.startsWith('en/');
export const stripLangPrefix = (slug: string) => slug.replace(/^en\//, '');

/** Koleksiyonu dile göre süzer ve slug'ı dil ön ekinden arındırır. */
export function byLang<T extends { slug: string }>(entries: T[], lang: Lang) {
  return entries
    .filter(e => (lang === 'en' ? isEnEntry(e.slug) : !isEnEntry(e.slug)))
    .map(e => ({ ...e, slug: stripLangPrefix(e.slug) }));
}
