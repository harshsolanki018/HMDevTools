import mongoose from 'mongoose';

const toolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: { type: String, required: true, index: true },
    description: { type: String, required: true },
    shortDescription: { type: String },
    keywords: [{ type: String, index: true }],
    status: { 
      type: String, 
      enum: ['active', 'coming-soon', 'disabled'], 
      default: 'active',
      index: true 
    },
    processingMode: { 
      type: String, 
      enum: ['client', 'server', 'hybrid', 'external-api'], 
      default: 'client' 
    },
    isPopular: { type: Boolean, default: false },
    isNewTool: { type: Boolean, default: false },
    seoTitle: { type: String },
    seoDescription: { type: String }
  },
  { timestamps: true }
);

export default mongoose.models.Tool || mongoose.model('Tool', toolSchema);
