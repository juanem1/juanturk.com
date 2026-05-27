import { getCollection, type CollectionEntry } from "astro:content";

export interface AdjacentPosts {
  previous: CollectionEntry<"posts"> | null;
  next: CollectionEntry<"posts"> | null;
}

export async function getAdjacentPosts(currentSlug: string): Promise<AdjacentPosts> {
  const posts = await getCollection("posts");
  const sortedPosts = posts.sort((leftPost, rightPost) => rightPost.data.date.getTime() - leftPost.data.date.getTime());
  const currentPostIndex = sortedPosts.findIndex((post) => post.id === currentSlug);

  if (currentPostIndex === -1) {
    throw new Error(`Could not resolve adjacent posts for slug "${currentSlug}".`);
  }

  return {
    previous: sortedPosts[currentPostIndex + 1] ?? null,
    next: sortedPosts[currentPostIndex - 1] ?? null,
  };
}
