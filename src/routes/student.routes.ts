import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import { validate } from 'class-validator';
import Student from '../models/Student';

const studentRouter = Router();

studentRouter.post('/', async (req: Request, res: Response) => {
  const repo = getRepository(Student);
  const { key, name, email } = req.body;

  const student = repo.create({
    email,
    name,
    key,
  });

  const erros = await validate(student);

  if (erros.length) {
    return res.status(400).json(erros);
  }

  const result = await repo.save(student);

  return res.status(201).json(result);
});

studentRouter.get('/', async (req: Request, res: Response) => {
  const repo = getRepository(Student);

  const result = await repo.find();

  return res.status(201).json(result);
});

export default studentRouter;
