import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import Lesson from '../models/Lesson';

const lessonRouter = Router();

lessonRouter.post('/', async (req: Request, res: Response) => {
  const repo = getRepository(Lesson);

  const result = await repo.save(req.body);

  return res.status(201).json(result);
});

lessonRouter.get('/', async (req: Request, res: Response) => {
  const repo = getRepository(Lesson);

  const result = await repo.find();

  return res.status(201).json(result);
});

export default lessonRouter;
