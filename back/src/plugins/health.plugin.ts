import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export default async function register(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.get('/', async () => {
    return { status: 'ok' };
  });

  done();
}
