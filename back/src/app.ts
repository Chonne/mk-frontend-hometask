import fastify, { FastifyServerOptions } from 'fastify';
import { antelopesRoute } from './modules/antelopes/antelopes.route';
import healthPlugin from './plugins/health.plugin';
// import dbPlugin from './plugins/db.plugin';
import * as swaggerPlugin from './plugins/swagger.plugin';

export default async function buildApp(opts: FastifyServerOptions = {}) {
  const app = fastify(opts);

  // todo: register a db plugin

  app.register(healthPlugin, { prefix: '/health' });

  // todo: refactor the swagger plugin so that it can be registered just like
  // any other plugin
  swaggerPlugin.register(app);

  // register antelopes routes
  app.register(antelopesRoute, { prefix: '/antelopes' });

  return app;
}
