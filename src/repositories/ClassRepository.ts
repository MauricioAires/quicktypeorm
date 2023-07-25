import { EntityRepository, Repository } from 'typeorm';
import Class from '../models/Class';

/**
 * NOTE: durante o curso foi informado
 * que devemos criar um repository quando precisamos de uma
 * função que não exite no ORM
 *
 * ORM é a sigla para "Object-Relational Mapping" (Mapeamento Objeto-Relacional, em português).
 */
@EntityRepository(Class)
export default class ClassRepository extends Repository<Class> {
  public async findByName(name: string): Promise<Class[]> {
    return this.find({
      where: {
        name,
      },
    });
  }
}
