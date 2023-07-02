import fastify, { FastifyServerOptions } from 'fastify';
import cors from '@fastify/cors';
import { antelopesRoute } from './modules/antelopes/antelopes.route';
import * as dbPlugin from './plugins/db.plugin';
import healthPlugin from './plugins/health.plugin';
import * as swaggerPlugin from './plugins/swagger.plugin';

export default async function buildApp(
  opts: FastifyServerOptions = {},
  config: { db?: { type: string; database: string } } = {}
) {
  const app = fastify(opts);

  await app.register(cors, {});

  await dbPlugin.register(app, config.db);

  swaggerPlugin.register(app);

  app.register(healthPlugin, { prefix: '/health' });

  // register antelopes routes
  app.register(antelopesRoute, { prefix: '/antelopes' });

  return app;
}
