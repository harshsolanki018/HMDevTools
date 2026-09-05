import ContactMessage from '../models/ContactMessage.js';
import mongoose from 'mongoose';
import crypto from 'crypto';

export const submitContact = async (req, res) => {
  try {
    const { name, email, topic, message } = req.body;

    if (!name || !email || !topic || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, topic, message.'
      });
    }

    if (typeof name !== 'string' || name.trim().length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Name must be a string under 100 characters.'
      });
    }

    if (typeof message !== 'string' || message.trim().length > 5000) {
      return res.status(400).json({
        success: false,
        message: 'Message must be a string under 5000 characters.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof email !== 'string' || !emailRegex.test(email.trim()) || email.trim().length > 150) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address under 150 characters.'
      });
    }

    const validTopics = ['General', 'Bug report', 'Tool request', 'Feedback', 'Business/API', 'Privacy'];
    if (!validTopics.includes(topic)) {
      return res.status(400).json({
        success: false,
        message: `Invalid topic. Must be one of: ${validTopics.join(', ')}`
      });
    }

    const ip = req.ip || req.connection?.remoteAddress || '127.0.0.1';
    const ipHash = crypto.createHash('sha256').update(ip + (process.env.JWT_SECRET || 'hm-salt')).digest('hex');

    const messageData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      topic,
      message: message.trim(),
      ipHash,
      status: 'new'
    };

    if (mongoose.connection.readyState === 1) {
      const newMessage = await ContactMessage.create(messageData);
      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message has been received.',
        id: newMessage._id
      });
    } else {
      console.log('[Contact Submission (Offline DB Fallback)] Message received cleanly for topic:', topic);
      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message has been received (processed in offline mode).'
      });
    }
  } catch (error) {
    console.error('[Contact Error]', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while submitting your message. Please try again later.'
    });
  }
};
