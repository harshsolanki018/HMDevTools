import mongoose from 'mongoose';

const contentItemSchema = new mongoose.Schema(
  {
    contentType: {
      type: String,
      required: true,
      enum: ['blog', 'changelog', 'roadmap', 'faq', 'guide', 'seo-meta'],
      index: true
    },
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, index: true },
    content: { type: String, default: '' },
    summary: { type: String, default: '' },
    status: { type: String, enum: ['draft', 'published', 'archived'], default: 'published' },
    publishedAt: { type: Date, default: Date.now },
    metadata: { type: mongoose.Schema.Types.Mixed, default: {} }
  },
  { timestamps: true }
);

export default mongoose.models.ContentItem || mongoose.model('ContentItem', contentItemSchema);
