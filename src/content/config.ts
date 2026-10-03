import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title_tr: z.string(),
    title_en: z.string(),
    programType: z.enum(['ESC', 'ERASMUS', 'LOCAL']),
    year: z.number(),
    status: z.enum(['Aktif', 'Tamamlandı']),
    themes: z.array(z.string()),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    applicationDeadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    coverImage: z.string().optional(),
    // Kapak bir afiş/grafikse 'contain': kırpılmadan tonlu panelde gösterilir.
    // Fotoğraflar varsayılan 'cover' ile tam kanar.
    coverFit: z.enum(['cover', 'contain']).default('cover'),
    applicationUrl: z.string().url().optional(),
    applicationLabel: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    summary_tr: z.string(),
    summary_en: z.string(),
    infoPackUrl: z.string().url().optional(),
    // "Başvurmadan önce" kartı: uzun metni okumadan temel uygunluğu gösterir.
    // Alanların hepsi isteğe bağlı; yalnızca dolu olanlar kartta görünür.
    eligibility: z.object({
      age: z.string().optional(),
      countries: z.string().optional(),
      duration: z.string().optional(),
      language: z.string().optional(),
      covered: z.string().optional(),
      upfront: z.string().optional(),
    }).optional(),
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title_tr: z.string(),
    title_en: z.string(),
    date: z.string(),
    time: z.string().optional(),
    location: z.string(),
    coverImage: z.string().optional(),
    // Kapak bir afiş/grafikse 'contain': kırpılmadan tonlu panelde gösterilir.
    // Fotoğraflar varsayılan 'cover' ile tam kanar.
    coverFit: z.enum(['cover', 'contain']).default('cover'),
    registrationUrl: z.string().url().optional(),
    recurring: z.enum(['weekly']).optional(),
    weekday: z.enum(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']).optional(),
    timezone: z.string().default('Europe/Istanbul'),
    draft: z.boolean().default(false),
  }),
});

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title_tr: z.string(),
    title_en: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    summary_tr: z.string(),
    summary_en: z.string(),
    applicationUrl: z.string().url().optional(),
    applicationLabel: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title_tr: z.string(),
    title_en: z.string(),
    date: z.string(),
    category: z.string().optional(),
    location: z.string().optional(),
    coverImage: z.string().optional(),
    // Kapak bir afiş/grafikse 'contain': kırpılmadan tonlu panelde gösterilir.
    // Fotoğraflar varsayılan 'cover' ile tam kanar.
    coverFit: z.enum(['cover', 'contain']).default('cover'),
    images: z.array(z.string()).default([]),
    summary_tr: z.string(),
    summary_en: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const storiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    programName: z.string(),
    country: z.string(),
    startDate: z.string(),
    images: z.array(z.string()).default([]),
    socialImage: z.string().optional(),
    socialImageWidth: z.number().int().positive().optional(),
    socialImageHeight: z.number().int().positive().optional(),
    socialVersion: z.string().optional(),
    summary: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const reportsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    period: z.string(),
    year: z.number(),
    kind: z.enum(['board', 'audit']).default('board'),
    signedBy: z.string().optional(),
    summary: z.string(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'events': eventsCollection,
  'posts': postsCollection,
  'news': newsCollection,
  'stories': storiesCollection,
  'reports': reportsCollection,
};
