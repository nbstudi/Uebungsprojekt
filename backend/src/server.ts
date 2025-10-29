import { createApp } from "./app";
import { serverConfig } from "@config/server";
import { logger } from "@utils/logger";
import { shutdownPrisma } from "@lib/prisma";

const app = createApp();
const server = app.listen(serverConfig.port, () => {
  logger.info(`API listening on http://localhost:${serverConfig.port}`);
});

async function gracefulShutdown(signal: string) {
  logger.info({ signal }, "Shutting down...");
  server.close(async () => {
    await shutdownPrisma();
    process.exit(0);
  });
}

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
