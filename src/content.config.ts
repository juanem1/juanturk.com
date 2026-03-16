import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/posts',
  }),
  schema: ({ image }) =>
    z.object({
      date: z.coerce.date(),
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      tldr: z.string().optional(),
      featured: z.boolean().optional(),
      heroImage: image().optional(),
    }),
});

export const collections = {
  posts,
};
