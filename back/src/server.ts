import config from './config';
import app from './app';
import { logger } from './utils/logger';

const signals = ['SIGINT', 'SIGTERM', 'SIGHUP'] as const;

async function gracefulShutdown({
  signal,
  server,
}: {
  signal: (typeof signals)[number];
  server: Awaited<ReturnType<typeof app>>;
}) {
  logger.info(`Got signal ${signal}. Good bye`);
  // todo: do I need to close the db connection here?
  await server.close();

  process.exit(0);
}

async function startServer(port: number) {
  const server = await app(
    {
      logger: {
        level: 'info',
        transport: {
          target: 'pino-pretty',
        },
      },
    },
    // todo: this config object should be prepared and typed in the config module
    {
      db: {
        type: config.DB_DIALECT,
        database: config.DB_STORAGE,
      },
    }
  );

  await server.listen({
    port,
  });

  logger.info(`App is listening on port ${port}`);

  for (let i = 0; i < signals.length; i++) {
    process.on(signals[i], () =>
      gracefulShutdown({
        signal: signals[i],
        server,
      })
    );
  }
}

startServer(config.PORT);
