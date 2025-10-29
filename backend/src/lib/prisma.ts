import { PrismaClient } from '@prisma/client';
import { logger } from '@utils/logger';
import { isDev } from '@config/app';

export const prisma = new PrismaClient({
  log: isDev ? ['query', 'info', 'warn', 'error'] : ['error']
});

export async function shutdownPrisma() {
  try {
    await prisma.$disconnect();
  } catch (e) {
    logger.error({ e }, 'Prisma disconnect failed');
  }
}