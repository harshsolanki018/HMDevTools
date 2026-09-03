import Tool from '../models/Tool.js';
import mongoose from 'mongoose';

export const getTools = async (req, res) => {
  try {
    const { category, popular, search } = req.query;
    
    // Check if DB is connected
    if (mongoose.connection.readyState === 1) {
      const query = { status: { $in: ['active', 'coming-soon'] } };
      if (category) query.category = category;
      if (popular === 'true') query.isPopular = true;
      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { keywords: { $regex: search, $options: 'i' } }
        ];
      }

      const tools = await Tool.find(query).sort({ isPopular: -1, name: 1 });
      return res.status(200).json({ success: true, count: tools.length, data: tools });
    }

    // Memory fallback when database is offline
    return res.status(200).json({
      success: true,
      message: 'Running in registry memory mode',
      count: 0,
      data: []
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error retrieving tools', error: error.message });
  }
};

export const getToolBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    if (mongoose.connection.readyState === 1) {
      const tool = await Tool.findOne({ slug });
      if (!tool) {
        return res.status(404).json({ success: false, message: 'Tool not found' });
      }
      return res.status(200).json({ success: true, data: tool });
    }

    return res.status(404).json({ success: false, message: 'Database offline, use client registry' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error retrieving tool', error: error.message });
  }
};
