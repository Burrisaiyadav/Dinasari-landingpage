import { Router } from 'express';
import { subscribe } from '../controllers/subscriber.controller.js';
import { validateBody } from '../middlewares/validation.middleware.js';
import { subscriptionRateLimiter } from '../middlewares/rateLimiter.middleware.js';
import { z } from 'zod';

const router = Router();

const subscribeSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email({ message: 'Invalid email address.' }),
});

router.post('/', subscriptionRateLimiter, validateBody(subscribeSchema), subscribe);

export default router;
