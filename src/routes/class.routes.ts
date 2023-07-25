import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import Class from '../models/Class';

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
  const repo = getRepository(Class);
  const result = await repo.find({
    name: req.params.name,
  });

  return res.json(result);
});

export default classRouter;
