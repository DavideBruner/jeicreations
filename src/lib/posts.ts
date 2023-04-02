import { getDirectoryContent } from "./files";

export type PostContent = {
  readonly date: string;
  readonly title: string;
  readonly slug: string;
  readonly tags?: string[];
  readonly fullPath: string;
};

export function getPosts(): PostContent[] {
  return getDirectoryContent("content/posts", ".mdx");
}

export function countPosts(tag?: string): number {
  return getPosts().filter(
    (it) => !tag || (it.tags && it.tags.includes(tag))
  ).length;
}

export function listPostContent(
  page: number,
  limit: number,
  tag?: string
): PostContent[] {
  return getPosts()
    .filter((it) => !tag || (it.tags && it.tags.includes(tag)))
    .slice((page - 1) * limit, page * limit);
}
