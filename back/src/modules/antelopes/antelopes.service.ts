import { Repository } from 'typeorm';
import { Antelope } from '../../db/entities';

export async function getAggregatedAntelopes(): Promise<AggregatedDataOutput> {
  return {
    continents: {},
    horns: {},
    total: 0,
  };
}

export async function getListAntelopes(
  AntelopeRepository: Repository<Antelope>,
  { offset, limit }: { offset?: number; limit?: number } = {
    offset: 0,
    limit: 10,
  }
): Promise<AntelopeOutput[]> {
  const antelopes = await AntelopeRepository.find({
    skip: offset,
    take: limit,
    relations: ['horns', 'continent'],
  });

  return antelopes.map((a) => ({
    id: a.id,
    name: a.name,
    height: a.height,
    weight: a.weight,
    picture: a.picture,
    horns: a.horns.shape,
    continent: a.continent.name,
  }));
}

export async function getAntelope(
  AntelopeRepository: Repository<Antelope>,
  id: AntelopeOutput['id']
): Promise<AntelopeOutput> {
  const antelope = await AntelopeRepository.findOne({
    where: { id },
    relations: ['horns', 'continent'],
  });

  if (!antelope) {
    throw new Error('NOT_FOUND');
  }

  return {
    id: antelope.id,
    name: antelope.name,
    height: antelope.height,
    weight: antelope.weight,
    picture: antelope.picture,
    horns: antelope.horns.shape,
    continent: antelope.continent.name,
  };
}
