import type { CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';

export interface PostSummary {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  date: Date;
  featured: boolean;
  heroImage?: ImageMetadata;
}

export function toPostSummary(post: CollectionEntry<'posts'>): PostSummary {
  return {
    slug: post.id,
    title: post.data.title,
    subtitle: post.data.subtitle,
    description: post.data.description,
    tags: post.data.tags,
    date: post.data.date,
    featured: post.data.featured ?? false,
    heroImage: post.data.heroImage,
  };
}
