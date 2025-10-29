// Logik für API Routen
import type { Request, Response } from 'express';

export async function login(req: Request, res: Response) {
  // TODO: call service, return token
  return res.json({ token: 'stub.jwt.token' });
}

export async function register(req: Request, res: Response) {
  // TODO: call service, create user
  return res.status(201).json({ ok: true });
}