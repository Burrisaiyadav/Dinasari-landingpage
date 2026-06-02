import { Router, Request, Response, NextFunction } from 'express';
import { prisma } from '../config/db.js';
import { validateBody } from '../middlewares/validation.middleware.js';
import { z } from 'zod';

const router = Router();

const applicationSchema = z.object({
  jobTitle: z.string().min(1, 'Job title is required'),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  resume: z.string().min(1, 'Resume path or file is required'),
  portfolio: z.string().optional().nullable(),
});

router.post('/', validateBody(applicationSchema), async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { jobTitle, name, email, resume, portfolio } = req.body;
    const application = await prisma.application.create({
      data: {
        jobTitle,
        name,
        email,
        resume,
        portfolio: portfolio || null,
      },
    });
    res.status(201).json(application);
  } catch (error) {
    next(error);
  }
});

export default router;
