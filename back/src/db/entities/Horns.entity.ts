import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Antelope } from './Antelope.entity';

@Entity()
export class Horns {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  shape: string;

  @OneToMany(() => Antelope, (antelope) => antelope.horns)
  antelopes: Antelope[];
}
