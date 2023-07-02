import fs from 'fs';
import path from 'path';

import { DataSource } from 'typeorm';
import { Antelope, Continent, Horns } from '../entities';

export async function seedDatabase(datasource: DataSource) {
  const species = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'species.json'), 'utf8')
  );

  const savedContinents = new Map<string, Continent>();
  const savedHorns = new Map<string, Horns>();

  for (const oneSpecies of species) {
    let continent: Continent;

    if (savedContinents.has(oneSpecies.continent)) {
      continent = savedContinents.get(oneSpecies.continent);
    } else {
      continent = new Continent();
      continent.name = oneSpecies.continent;
      await datasource.manager.save(continent);
      savedContinents.set(oneSpecies.continent, continent);
    }

    let horns: Horns;

    if (savedHorns.has(oneSpecies.horns)) {
      horns = savedHorns.get(oneSpecies.horns);
    } else {
      horns = new Horns();
      horns.shape = oneSpecies.horns;
      await datasource.manager.save(horns);
      savedHorns.set(oneSpecies.horns, horns);
    }

    const antelope = new Antelope();
    antelope.name = oneSpecies.name;
    antelope.weight = oneSpecies.weight;
    antelope.height = oneSpecies.height;
    antelope.picture = oneSpecies.picture;
    antelope.continent = continent;
    antelope.horns = horns;
    await datasource.manager.save(antelope);
  }
}
