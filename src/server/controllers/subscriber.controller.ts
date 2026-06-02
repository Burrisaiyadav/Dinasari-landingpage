import { Request, Response, NextFunction } from 'express';
import { findSubscriberByEmail, createSubscriber } from '../services/subscriber.service.js';
import { sendWelcomeEmail } from '../services/email.service.js';

export const subscribe = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email } = req.body;

    // Check if subscriber already exists
    const existing = await findSubscriberByEmail(email);
    if (existing) {
      res.status(200).json({
        success: false,
        message: 'Email already subscribed.'
      });
      return;
    }

    // Store email in PostgreSQL using Prisma
    await createSubscriber(email);

    // Send welcome email via Resend
    // We await this, but catch internal errors to ensure subscription succeeds even if email sending fails
    try {
      const emailSent = await sendWelcomeEmail(email);
      if (!emailSent) {
        console.warn(`[Subscriber Controller] Subscriber stored, but welcome email failed to send to ${email}.`);
      }
    } catch (emailErr) {
      console.error('[Subscriber Controller] Resend service exception:', emailErr);
    }

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Successfully subscribed.'
    });
  } catch (error) {
    next(error);
  }
};
