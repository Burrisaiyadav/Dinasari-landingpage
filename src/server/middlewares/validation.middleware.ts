import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

export const validateBody = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // Special case formatting for subscribers validation to match spec
        const hasEmailError = error.errors.some((err) => err.path.includes('email'));
        if (hasEmailError) {
          res.status(200).json({
            success: false,
            message: 'Invalid email address.'
          });
          return;
        }

        res.status(400).json({
          success: false,
          message: error.errors[0]?.message || 'Invalid input data.'
        });
        return;
      }
      next(error);
    }
  };
};
