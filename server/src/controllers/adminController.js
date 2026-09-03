import Tool from '../models/Tool.js';
import Category from '../models/Category.js';
import ContactMessage from '../models/ContactMessage.js';
import ContentItem from '../models/ContentItem.js';
import mongoose from 'mongoose';

// Extensible Admin/CMS Controller endpoints
export const getAdminOverview = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(200).json({
        success: true,
        mode: 'offline',
        stats: { tools: 0, categories: 0, contactMessages: 0, contentItems: 0 }
      });
    }

    const [tools, categories, contactMessages, contentItems] = await Promise.all([
      Tool.countDocuments(),
      Category.countDocuments(),
      ContactMessage.countDocuments({ status: 'new' }),
      ContentItem.countDocuments()
    ]);

    res.status(200).json({
      success: true,
      stats: { tools, categories, unreadContactMessages: contactMessages, contentItems }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createContentItem = async (req, res) => {
  try {
    const item = await ContentItem.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getContentItems = async (req, res) => {
  try {
    const { type } = req.query;
    const query = type ? { contentType: type } : {};
    const items = await ContentItem.find(query).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: items.length, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
