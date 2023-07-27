import { Column, Entity } from 'typeorm';
// import Institution from './Institution';
import Identifier from './Identifier';

// @ChildEntity()
@Entity('college')
export default class College {
  @Column(type => Identifier)
  identification: Identifier;

  @Column()
  graduations: string;

  @Column()
  year: number;
}
