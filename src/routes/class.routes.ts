import { Request, Response, Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import Class from '../models/Class';
import ClassRepository from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (req: Request, res: Response) => {
  const repo = getRepository(Class);

  const result = await repo.save(req.body);

  return res.status(201).json(result);
});

classRouter.get('/', async (req: Request, res: Response) => {
  const repo = getRepository(Class);

  const result = await repo.find();

  return res.status(201).json(result);
});

classRouter.get('/:name', async (req: Request, res: Response) => {
  const repo = getCustomRepository(ClassRepository);

  const result = await repo.findByName(req.params.name);

  return res.json(result);
});

export default classRouter;
