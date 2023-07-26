import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Class from './Class';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  key: number;

  /**
   * [Many to Many] só é preciso configurar em um dos
   * models/entities
   *
   */
  @ManyToMany(type => Class)
  @JoinTable({
    name: 'students_classes',
    joinColumn: {
      name: 'student_id',
    },
    inverseJoinColumn: {
      name: 'class_id',
    },
  })
  classes: Class[];

  @Column()
  link_content: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
