import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import {
  getAggregatedAntelopessHandler,
  getAntelopeHandler,
  getListAntelopesHandler,
} from './antelopes.controller';

export async function antelopesRoute(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.get('/', getListAntelopesHandler);
  app.get('/:id', getAntelopeHandler);
  app.get('/aggregated', getAggregatedAntelopessHandler);

  done();
}
