import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pinoHttp from 'pino-http';
import { serverConfig } from '@config/server';
import { router as api } from '@routes/index';
import { errorHandler } from '@middlewares/errorHandler';

export function createApp() {
  const app = express();

  app.set('trust proxy', serverConfig.trustProxy);
  app.use(helmet());
  app.use(cors(serverConfig.cors));
  app.use(express.json({ limit: '1mb' }));
  app.use(pinoHttp());

  app.get('/health', (_req, res) => res.json({ ok: true }));
  app.use('/api/v1', api);

  app.use((req, res) => res.status(404).json({ error: 'Not Found', path: req.path }));
  app.use(errorHandler);

  return app;
}