import type { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const validate =
  (schema: ZodSchema<any>) =>
  (req: Request, _res: Response, next: NextFunction) => {
    const data = { body: req.body, params: req.params, query: req.query };
    schema.parse(data);
    next();
  };