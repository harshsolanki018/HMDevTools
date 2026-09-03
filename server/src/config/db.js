import mongoose from 'mongoose';

export const connectDB = async () => {
  const connString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hmdevtools';
  try {
    const conn = await mongoose.connect(connString, {
      serverSelectionTimeoutMS: 3000 // Quick timeout if MongoDB is offline
    });
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`[MongoDB Warning] Could not connect to MongoDB at ${connString}: ${error.message}`);
    console.warn(`[MongoDB Warning] Running server in lightweight memory-fallback mode.`);
    return false;
  }
};
