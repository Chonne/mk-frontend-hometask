import { FastifyReply, FastifyRequest } from 'fastify';
import { logger } from '../../utils/logger';
import { getAggregatedAntelopes, getListAntelopes } from './antelopes.service';

export async function getAggregatedAntelopessHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const aggregated = await getAggregatedAntelopes();
    return reply.code(200).send(aggregated);
  } catch (e) {
    logger.error(e, 'getAggregatedAntelopessHandler: error getting antelopes');
    return reply.code(500).send({ message: 'Error getting antelopes' });
  }
}

export async function getListAntelopesHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const antelopes = await getListAntelopes();
    return reply.code(200).send(antelopes);
  } catch (e) {
    logger.error(e, 'getListAntelopesHandler: error getting antelopes');
    return reply.code(500).send({ message: 'Error getting antelopes' });
  }
}
