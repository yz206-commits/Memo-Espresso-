import { defineCollection, z } from 'astro:content';

const memos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    section: z.string(),          // must match a slug in src/data/sections.ts
    summary: z.string(),
    thumbnail: z.string().optional(), // e.g. /images/memos/my-image.jpg
    draft: z.boolean().default(false),
  }),
});

export const collections = { memos };
