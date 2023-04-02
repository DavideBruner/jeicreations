import { getDirectoryContent } from "./files";

export type ProductContent = {
  readonly date: string;
  readonly title?: string;
  readonly slug: string;
  readonly categories?: string[];
  fullPath: string;
  readonly materials?: string[];
  readonly content?: any;
};

export function getProducts(): ProductContent[] {
  return getDirectoryContent("content/products", ".mdx");
}

export function getProduct(slug: string): ProductContent {
  return getProducts().filter((it) => (
    !slug || (it.slug && it.slug.includes(slug))
  ))[0];
} 
