// import {
//   Column,
//   CreateDateColumn,
//   Entity,
//   PrimaryGeneratedColumn,
//   TableInheritance,
//   UpdateDateColumn,
// } from 'typeorm';

// /**
//  * NOTE: Como essa classe será utilizada com uma
//  * classe de referencia (herança) ela não deve possuir a
//  * anotação de [Entity]
//  *
//  * Dentro de um senário mais real poderia ser criado uma
//  * classe abstrata apenas com id created at and updated at
//  *
//  * O proposito dessa classe evitar redundância e menos código
//  */

// // @Entity('institution')
// @Entity('institution')
// /**
//  * NOTE: Herança de uma tabela única, o typeORM vai pegar
//  * os models filhos dessa classe e realizar um merge de todas as colunas
//  * em uma única tabela
//  */
// @TableInheritance({
//   column: {
//     type: 'varchar',
//     name: 'type',
//   },
// })
// export default abstract class Institution {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   name: string;

//   @Column()
//   cnpj: string;

//   @CreateDateColumn()
//   created_at: Date;

//   @UpdateDateColumn()
//   updated_at: Date;
// }
