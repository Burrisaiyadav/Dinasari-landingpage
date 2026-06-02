import { Router, Request, Response, NextFunction } from 'express';
import { prisma } from '../config/db.js';
import { validateBody } from '../middlewares/validation.middleware.js';
import { z } from 'zod';

const router = Router();

const inquirySchema = z.object({
  type: z.string().min(1, 'Inquiry type is required'),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  firm: z.string().min(1, 'Firm name is required'),
  message: z.string().optional().nullable(),
});

router.post('/', validateBody(inquirySchema), async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { type, name, email, firm, message } = req.body;
    const inquiry = await prisma.inquiry.create({
      data: {
        type,
        name,
        email,
        firm,
        message: message || null,
      },
    });
    res.status(201).json(inquiry);
  } catch (error) {
    next(error);
  }
});

export default router;
