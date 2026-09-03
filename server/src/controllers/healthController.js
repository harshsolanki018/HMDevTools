import mongoose from 'mongoose';

export const getHealthStatus = (req, res) => {
  const isDbConnected = mongoose.connection.readyState === 1;
  
  res.status(200).json({
    status: 'ok',
    service: 'HMDevTools API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    database: {
      connected: isDbConnected,
      status: isDbConnected ? 'connected' : 'disconnected/memory-fallback'
    }
  });
};
