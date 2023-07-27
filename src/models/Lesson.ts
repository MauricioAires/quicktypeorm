import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Content from './Content';
import Discipline from './Discipline';

@Entity('lesson')
export default class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @OneToOne(type => Content, lesson => Lesson)
  content: Content;

  /**
   * NOTE: O typeORM já identifica automaticamente que
   * a coluna de relacionamento deve ficar na tabela
   * que contem o [Many]
   *
   * Mas eu prefiro especificar porque o typeORM criar o nome
   * das colunas no formato de camelCase e eu prefiro configurar
   * todas as colunas do banco de dados no modelo snake_case
   */

  /**
   * eager -> sempre que for feito um find na lesson
   * ele já vai trazer as classes automaticamente
   *
   * importante o eager só pode ser usado em uma ponta
   * caso seja adicionado nos dois irá criar um loop
   */
  @ManyToOne(type => Discipline, lessons => Lesson, {
    eager: true,
  })
  @JoinColumn({
    name: 'classe_id',
  })
  classe: Discipline;

  @Column()
  link_content: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
