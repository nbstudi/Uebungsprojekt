//Express/Koa Server Einstiegspunkt?
import { Router } from 'express';
import { router as auth } from './auth.routes';
//import { router as user } from './user.routes';
//import { router as scanner } from './scanner.routes';

export const router = Router();
router.use('/auth', auth);
//router.use('/users', user);
//router.use('/scanner', scanner);