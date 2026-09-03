import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    topic: {
      type: String,
      required: true,
      enum: ['General', 'Bug report', 'Tool request', 'Feedback', 'Business/API', 'Privacy']
    },
    message: { type: String, required: true, maxlength: 5000 },
    status: { type: String, enum: ['new', 'read', 'archived'], default: 'new' },
    ipHash: { type: String }
  },
  { timestamps: true }
);

export default mongoose.models.ContactMessage || mongoose.model('ContactMessage', contactMessageSchema);
