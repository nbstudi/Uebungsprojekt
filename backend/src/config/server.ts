import { env, isProd } from './app';

export const serverConfig = {
  port: env.PORT,
  cors: {
    origin: env.CORS_ORIGIN ?? true // im Zweifel alles erlauben (nur Dev!)
  },
  trustProxy: isProd // hinter Proxy/CDN in Prod
};