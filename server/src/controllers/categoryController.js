import Category from '../models/Category.js';
import mongoose from 'mongoose';
import { CATEGORIES } from '../config/categories.js';

export const getCategories = async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const categories = await Category.find().sort({ order: 1 });
      if (categories.length > 0) {
        return res.status(200).json({ success: true, count: categories.length, data: categories });
      }
    }
    // Server fallback constant
    return res.status(200).json({ success: true, count: CATEGORIES.length, data: CATEGORIES });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error retrieving categories', error: error.message });
  }
};
