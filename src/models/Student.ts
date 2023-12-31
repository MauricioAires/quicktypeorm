import { IsEmail, Max, MaxLength, Min, MinLength } from 'class-validator';
import { EncryptionTransformer } from 'typeorm-encrypted';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Discipline from './Discipline';
import { MyCrypto } from '../helpers/crypto';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
    transformer: MyCrypto,
  })
  @MaxLength(50, {
    message: 'Um nome precisar ter no máximo 50 caracteres',
  })
  @MinLength(2, {
    message: 'Nome deve possuir no mínimo 2 caracteres',
  })
  name: string;

  @Column()
  @Max(999_999)
  @Min(100_000)
  key: number;

  /**
   * [Many to Many] só é preciso configurar em um dos
   * models/entities
   *
   */
  @ManyToMany(type => Discipline)
  @JoinTable({
    name: 'students_classes',
    joinColumn: {
      name: 'student_id',
    },
    inverseJoinColumn: {
      name: 'class_id',
    },
  })
  classes: Discipline[];

  @Column()
  @IsEmail()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
