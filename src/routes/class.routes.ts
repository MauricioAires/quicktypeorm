import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import Content from '../models/Content';

const contentRouter = Router();

contentRouter.post('/', async (req: Request, res: Response) => {
  const repo = getRepository(Content);

  const result = await repo.save(req.body);

  return res.status(201).json(result);
});

contentRouter.get('/', async (req: Request, res: Response) => {
  const repo = getRepository(Content);

  const result = await repo.find();

  return res.status(201).json(result);
});

export default contentRouter;
