import 'reflect-metadata';
import { FastifyInstance } from 'fastify';
import dbConn from 'typeorm-fastify-plugin';
import { Antelope, Continent, Horns } from '../db/entities';
import { seedDatabase } from '../db/seeds/species.seed';

export async function register(app: FastifyInstance, { type, database }) {
  await app.register(dbConn, {
    type,
    database,
    synchronize: true,
    logging: true,
    entities: [Antelope, Continent, Horns],
  });

  // seed database
  await seedDatabase(app.orm);
}
