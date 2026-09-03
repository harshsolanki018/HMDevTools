import { CATEGORIES } from '@shared/categories.js';

export const categoriesRegistry = CATEGORIES;

export const getCategoryBySlug = (slug) => {
  return categoriesRegistry.find(c => c.slug === slug || c.id === slug);
};
