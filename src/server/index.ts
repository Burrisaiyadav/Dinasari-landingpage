import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import { apiRateLimiter } from './middlewares/rateLimiter.middleware.js';
import { errorHandler } from './middlewares/error.middleware.js';

// Import Routes
import subscriberRoutes from './routes/subscriber.routes.js';
import applicationRoutes from './routes/application.routes.js';
import inquiryRoutes from './routes/inquiry.routes.js';

const app = express();

// CORS configuration - Allow requests from frontend
const corsOptions = {
  origin: [env.FRONTEND_URL, 'http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Apply general API rate limiter to all /api routes
app.use('/api', apiRateLimiter);

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Mount Specific API Routes
app.use('/api/subscribers', subscriberRoutes);
app.use('/api/newsletter', subscriberRoutes); // Backward compatibility alias
app.use('/api/applications', applicationRoutes);
app.use('/api/inquiries', inquiryRoutes);

// Fallback for undefined routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'API route not found' });
});

// Global Error Handler Middleware (must be registered last)
app.use(errorHandler);

const PORT = env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Dinasari Production-Ready API Server running on http://localhost:${PORT}`);
  console.log(`👉 Environment: ${env.NODE_ENV}`);
});
