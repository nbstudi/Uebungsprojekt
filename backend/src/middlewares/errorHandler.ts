import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { logger } from "@utils/logger";

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof ZodError) {
    return res
      .status(400)
      .json({ error: "ValidationError", details: err.flatten() });
  }
  const status = err?.status ?? 500;
  const message = err?.message ?? "Internal Server Error";
  if (status >= 500) logger.error({ err }, "Unhandled error");
  return res.status(status).json({ error: message });
}
