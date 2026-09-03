import express from 'express';
import { getHealthStatus } from '../controllers/healthController.js';
import { getTools, getToolBySlug } from '../controllers/toolController.js';
import { getCategories } from '../controllers/categoryController.js';
import { submitContact } from '../controllers/contactController.js';
import { getAdminOverview, createContentItem, getContentItems } from '../controllers/adminController.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// Public V1 Endpoints
router.get('/health', getHealthStatus);
router.get('/tools', getTools);
router.get('/tools/:slug', getToolBySlug);
router.get('/categories', getCategories);
router.post('/contact', contactLimiter, submitContact);

// Extensible Admin/CMS Endpoints
router.get('/admin/overview', getAdminOverview);
router.get('/admin/content', getContentItems);
router.post('/admin/content', createContentItem);

export default router;
