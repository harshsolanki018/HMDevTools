import Category from '../models/Category.js';
import Tool from '../models/Tool.js';
import { CATEGORIES } from '../config/categories.js';

export const seedInitialData = async () => {
  try {
    const categoryCount = await Category.countDocuments();
    if (categoryCount === 0) {
      await Category.insertMany(CATEGORIES);
      console.log(`[Seed] Successfully seeded ${CATEGORIES.length} categories.`);
    }
  } catch (error) {
    console.warn(`[Seed Warning] Could not seed database: ${error.message}`);
  }
};
