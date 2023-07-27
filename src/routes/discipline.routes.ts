import { Request, Response, Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import DisciplineRepository from '../repositories/DisciplineRepository';
import Discipline from '../models/Discipline';

const disciplineRouter = Router();

disciplineRouter.post('/', async (req: Request, res: Response) => {
  const repo = getRepository(Discipline);

  const result = await repo.save(req.body);

  return res.status(201).json(result);
});

disciplineRouter.get('/', async (req: Request, res: Response) => {
  const repo = getRepository(Discipline);

  const result = await repo.find();

  return res.status(201).json(result);
});

disciplineRouter.get('/:name', async (req: Request, res: Response) => {
  const repo = getCustomRepository(DisciplineRepository);

  const result = await repo.findByName(req.params.name);

  return res.json(result);
});

export default disciplineRouter;
