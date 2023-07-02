import { Repository } from 'typeorm';
import { Antelope } from '../../db/entities';

// todo: move this to a repository
const getAntelopesPerContinent = async (
  AntelopeRepository: Repository<Antelope>
): Promise<
  {
    continentId: number;
    continentName: string;
    nbAntelopes: number;
  }[]
> => {
  const groupedContinents = await AntelopeRepository.createQueryBuilder(
    'antelope'
  )
    .select('COUNT(*)', 'nbAntelopes')
    .addSelect('continent.id', 'continentId')
    .addSelect('continent.name', 'continentName')
    .leftJoinAndSelect('antelope.continent', 'continent')
    .groupBy('continentId')
    .getRawMany();

  return groupedContinents;
};

// todo: move this to a repository
const getAntelopesPerHorns = async (
  AntelopeRepository: Repository<Antelope>
): Promise<
  {
    hornsId: number;
    hornsShape: string;
    nbAntelopes: number;
  }[]
> => {
  const groupedHorns = await AntelopeRepository.createQueryBuilder('antelope')
    .select('COUNT(*)', 'nbAntelopes')
    .addSelect('horns.id', 'hornsId')
    .addSelect('horns.shape', 'hornsShape')
    .leftJoinAndSelect('antelope.horns', 'horns')
    .groupBy('hornsId')
    .getRawMany();

  return groupedHorns;
};

export async function getAggregatedAntelopes(
  AntelopeRepository: Repository<Antelope>
): Promise<AggregatedDataOutput> {
  return {
    continents: await getAntelopesPerContinent(AntelopeRepository),
    horns: await getAntelopesPerHorns(AntelopeRepository),
    total: await AntelopeRepository.count(),
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
