import { Column, Entity } from 'typeorm';
// import Institution from './Institution';
import Identifier from './Identifier';

// @ChildEntity()
@Entity('university')
export default class University {
  @Column(type => Identifier)
  identification: Identifier;

  @Column()
  graduations: string;

  @Column()
  doctors: string;

  @Column()
  masters: string;
}
