import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import Student from '../models/Student';

const studentRouter = Router();

studentRouter.post('/', async (req: Request, res: Response) => {
  const repo = getRepository(Student);

  const result = await repo.save(req.body);

  return res.status(201).json(result);
});

studentRouter.get('/', async (req: Request, res: Response) => {
  const repo = getRepository(Student);

  const result = await repo.find();

  return res.status(201).json(result);
});

export default studentRouter;
