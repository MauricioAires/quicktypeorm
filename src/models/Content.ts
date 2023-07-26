import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('content')
export default class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  link_content: string;
}
