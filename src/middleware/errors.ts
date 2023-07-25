import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/AppError';

export default function handleAppErrors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): Response {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  // NOTE: Lidar com error não identificado
  return res.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
}
