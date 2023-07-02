import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Continent } from './Continent.entity';
import { Horns } from './Horns.entity';

@Entity()
export class Antelope {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('int')
  weight: number;

  @Column('int')
  height: number;

  @ManyToOne(() => Continent, (continent) => continent.antelopes)
  continent: Continent;

  @ManyToOne(() => Horns, (horns) => horns.antelopes)
  horns: Horns;

  @Column('varchar')
  picture: string;
}
