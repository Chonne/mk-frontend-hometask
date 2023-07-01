import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import {
  getAggregatedAntelopessHandler,
  getListAntelopesHandler,
} from './antelopes.controller';

export async function antelopesRoute(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.get('/', getListAntelopesHandler);
  app.get('/aggregated', getAggregatedAntelopessHandler);

  done();
}
