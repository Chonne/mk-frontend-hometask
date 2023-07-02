import { FastifyReply, FastifyRequest } from 'fastify';
import { logger } from '../../utils/logger';
import {
  getAggregatedAntelopes,
  getAntelope,
  getListAntelopes,
} from './antelopes.service';
import { DataSource } from 'typeorm';
import { Antelope } from '../../db/entities';

const getAntelopeRepository = (orm: DataSource) =>
  orm.manager.getRepository(Antelope);

export async function getAggregatedAntelopessHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const aggregated = await getAggregatedAntelopes(
      getAntelopeRepository(request.server.orm)
    );
    return reply.code(200).send(aggregated);
  } catch (e) {
    logger.error(e, 'getAggregatedAntelopessHandler: error getting antelopes');
    return reply.code(500).send({ message: 'Error getting antelopes' });
  }
}

export async function getAntelopeHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const antelope = await getAntelope(
      getAntelopeRepository(request.server.orm),
      // todo: don't forget to fix this
      // @ts-ignore
      request.params.id
    );
    return reply.code(200).send(antelope);
  } catch (e) {
    // todo: use proper error handling
    if (e.message === 'NOT_FOUND') {
      return reply.code(404).send({ message: 'Entity not found' });
    } else {
      logger.error(e, 'getAntelopeHandler: error getting antelope');
      return reply.code(500).send({ message: 'Error getting antelope' });
    }
  }
}

export async function getListAntelopesHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    // todo: support pagination
    const antelopes = await getListAntelopes(
      getAntelopeRepository(request.server.orm)
    );
    return reply.code(200).send(antelopes);
  } catch (e) {
    logger.error(e, 'getListAntelopesHandler: error getting antelopes');
    return reply.code(500).send({ message: 'Error getting antelopes' });
  }
}
