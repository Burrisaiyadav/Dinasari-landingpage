import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env.js';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Log the full error internally
  console.error(`[Error Handler] [${req.method}] ${req.url} - Error:`, err);

  const statusCode = err.status || err.statusCode || 500;
  const message = err.message || 'An unexpected error occurred.';

  res.status(statusCode).json({
    success: false,
    message: message,
    ...(env.NODE_ENV === 'development' ? { stack: err.stack } : {})
  });
};
