import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { connectDB } from './config/db.js';
import v1Routes from './routes/v1Routes.js';
import { globalLimiter } from './middleware/rateLimiter.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { seedInitialData } from './services/seedService.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Security Headers & Helmet Configuration
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

const allowedOrigins = [
  process.env.CLIENT_URL || 'https://hmdevtools.com',
  process.env.CORS_ORIGIN || 'https://hmdevtools.com',
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
      callback(null, true);
    } else {
      callback(new Error('CORS Policy: Origin not allowed'));
    }
  },
  credentials: true
}));

app.use(compression());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true, limit: '2mb' }));

// Global Rate Limiter
app.use('/api', globalLimiter);

// API v1 Routes
app.use('/api/v1', v1Routes);

// Root Health Fallback
app.get('/', (req, res) => {
  res.json({ message: 'HMDevTools Backend API Server is running.', docs: '/api/v1/health' });
});

// Error handling
app.use('/api', notFoundHandler);
app.use(errorHandler);

// Start server with graceful shutdown handling
const startServer = async () => {
  const isConnected = await connectDB();
  if (isConnected) {
    await seedInitialData();
  }
  
  const server = app.listen(PORT, () => {
    console.log(`\n==================================================`);
    console.log(`🚀 HMDevTools Express Server running on port ${PORT}`);
    console.log(`📡 Health Check: http://localhost:${PORT}/api/v1/health`);
    console.log(`==================================================\n`);
  });

  const handleShutdown = (signal) => {
    console.log(`\nReceived ${signal}. Shutting down gracefully...`);
    server.close(() => {
      console.log('HTTP server closed cleanly.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => handleShutdown('SIGTERM'));
  process.on('SIGINT', () => handleShutdown('SIGINT'));
};

startServer();
