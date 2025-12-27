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
    featured: z.boolean().default(false),
    summary_tr: z.string(),
    summary_en: z.string(),
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title_tr: z.string(),
    title_en: z.string(),
    date: z.string(),
    location: z.string(),
    coverImage: z.string().optional(),
    registrationUrl: z.string().url().optional(),
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
  }),
});

export const collections = {
  'projects': projectsCollection,
  'events': eventsCollection,
  'posts': postsCollection,
};

