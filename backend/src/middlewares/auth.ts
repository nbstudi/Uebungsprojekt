import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "@config/app";

export interface AuthPayload {
  sub: string;
  email: string;
  role?: string;
}

export function auth(required = true) {
  return (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers.authorization;
    if (!header) {
      return required
        ? res.status(401).json({ error: "Missing Authorization header" })
        : next();
    }
    const token = header.replace(/^Bearer\s+/i, "");
    try {
      const payload = jwt.verify(token, env.JWT_SECRET) as AuthPayload;
      (req as any).user = payload;
      next();
    } catch {
      return res.status(401).json({ error: "Invalid token" });
    }
  };
}
