// import fs from 'fs';
// import path from 'path';

import { DataSource } from 'typeorm';
import { Antelope, Continent, Horns } from '../entities';

// const antelopes = JSON.parse(
//   fs.readFileSync(
//     path.join(__dirname, '..', '..', 'data', 'species.json'),
//     'utf8'
//   )
// );

export async function seedDatabase(datasource: DataSource) {
  const africa = new Continent();
  africa.name = 'Africa';
  await datasource.manager.save(africa);

  const twistedHorns = new Horns();
  twistedHorns.shape = 'Twisted';
  await datasource.manager.save(twistedHorns);

  const addax = new Antelope();
  addax.name = 'Addax';
  addax.weight = 220;
  addax.height = 41;
  addax.picture =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/A_big_male_Addax_showing_as_the_power_of_his_horns.jpg' +
    '/1280px-A_big_male_Addax_showing_as_the_power_of_his_horns.jpg';
  addax.continent = africa;
  addax.horns = twistedHorns;
  await datasource.manager.save(addax);
}
