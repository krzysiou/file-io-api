import { sign, verify } from 'jsonwebtoken';

import type { NextFunction, Request, Response } from 'express';
import type { User } from '../types';

const DAY = 24 * 60 * 60 * 1000;
const EXPIRE_DAYS = 7 * DAY;

const generateJsonWebToken = (user: User) => {
  return sign(user, process.env.TOKEN_SECRET as string);
};

const verifyJsonWebToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1] as string;

    req.body.user = verify(token, process.env.TOKEN_SECRET as string) as User;

    next();
  } catch {
    res.status(401).send({ message: 'Unauthorized' });
  }
};

export { generateJsonWebToken, verifyJsonWebToken, EXPIRE_DAYS };
