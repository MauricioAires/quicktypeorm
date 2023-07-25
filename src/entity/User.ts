import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * NOTE: As entities são o mesmo que os models
 */

/**
 * NOTE: Decoretors
 */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
