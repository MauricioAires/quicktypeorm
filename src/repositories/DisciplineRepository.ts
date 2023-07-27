import { EntityRepository, Repository } from 'typeorm';
import Discipline from '../models/Discipline';

/**
 * NOTE: durante o curso foi informado
 * que devemos criar um repository quando precisamos de uma
 * função que não exite no ORM
 *
 * ORM é a sigla para "Object-Relational Mapping" (Mapeamento Objeto-Relacional, em português).
 */
@EntityRepository(Discipline)
export default class DisciplineRepository extends Repository<Discipline> {
  public async findByName(name: string): Promise<Discipline[]> {
    return this.find({
      where: {
        name,
      },
    });
  }
}
