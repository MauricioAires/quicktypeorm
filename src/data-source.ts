import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

/**
 * - Route -> O repository e consumido pela rota e as vezes os service
 * - Repository -> Quem vai conversar com a fonte de dados
 * - Model -> Representa as entidades dos bancos
 * - Migrations -> Sistema de versionamento de bando de dados (segurança & controle)
 * - Service -> Regras de negócios  // com um único método
 */

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "oni",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
