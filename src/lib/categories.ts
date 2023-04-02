import categories from "../../meta/categories.yml";

export type CategoryContent = {
  readonly slug: string;
  readonly name: string;
  readonly color: string;
  readonly img: string;
};

const categoryMap: { [key: string]: CategoryContent } = generateTagMap();

function generateTagMap(): { [key: string]: CategoryContent } {
  let result: { [key: string]: CategoryContent } = {};
  for (const category of categories.categories) {
    result[category.slug] = category;
  }
  return result;
}

export function getCategory(slug: string) {
  return categoryMap[slug];
}

export function getCategories(): CategoryContent[] {
  return categories.categories;
}
