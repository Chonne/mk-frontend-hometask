import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Antelope } from './Antelope.entity';

@Entity()
export class Continent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true })
  name: string;

  @OneToMany(() => Antelope, (antelope) => antelope.continent)
  antelopes: Antelope[];
}
