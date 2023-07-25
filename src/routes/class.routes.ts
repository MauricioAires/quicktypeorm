import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import Class from '../models/Class';

const classRouter = Router();

classRouter.post('/', async (req: Request, res: Response) => {
  const repo = getRepository(Class);

  const result = await repo.save(req.body);

  return res.status(201).json(result);
});

export default classRouter;
