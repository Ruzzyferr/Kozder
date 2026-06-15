import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title_tr: z.string(),
    title_en: z.string(),
    programType: z.enum(['ESC', 'ERASMUS']),
    year: z.number(),
    status: z.enum(['Aktif', 'Tamamlandı']),
    themes: z.array(z.string()),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    coverImage: z.string().optional(),
    applicationUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    summary_tr: z.string(),
    summary_en: z.string(),
    infoPackUrl: z.string().url().optional(),
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
    registrationUrl: z.string().url().optional(),
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
    draft: z.boolean().default(false),
  }),
});

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title_tr: z.string(),
    title_en: z.string(),
    date: z.string(),
    location: z.string().optional(),
    coverImage: z.string().optional(),
    images: z.array(z.string()).default([]),
    summary_tr: z.string(),
    summary_en: z.string(),
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
    summary: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'events': eventsCollection,
  'posts': postsCollection,
  'news': newsCollection,
  'stories': storiesCollection,
};
