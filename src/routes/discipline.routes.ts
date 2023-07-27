import { Request, Response, Router } from 'express';
import { getConnection, getCustomRepository, getRepository } from 'typeorm';
import DisciplineRepository from '../repositories/DisciplineRepository';
import Discipline from '../models/Discipline';

const disciplineRouter = Router();

disciplineRouter.post('/', async (req: Request, res: Response) => {
  const repo = getRepository(Discipline);

  const result = await repo.save(req.body);

  /**
   * NOTE: Limpar o cache quando for adicionado
   * uma nova informação
   */
  await getConnection().queryResultCache?.remove(['listDiscipline']);

  return res.status(201).json(result);
});

disciplineRouter.get('/', async (req: Request, res: Response) => {
  const repo = getRepository(Discipline);

  const result = await repo.find({
    cache: {
      id: 'listDiscipline',
      milliseconds: 10_000,
    },
  });

  return res.status(201).json(result);
});

disciplineRouter.get('/:name', async (req: Request, res: Response) => {
  const repo = getCustomRepository(DisciplineRepository);

  const result = await repo.findByName(req.params.name);

  return res.json(result);
});

export default disciplineRouter;
