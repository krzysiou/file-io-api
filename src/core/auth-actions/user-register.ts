import { hash } from 'bcrypt';
import { v4 as uuid } from 'uuid';

import type { Request, Response } from 'express';

import { EXPIRE_DAYS, generateJsonWebToken } from '../../utils/jwt-actions';
import { findUser, saveUser } from '../../utils/mock-user-database';

const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await hash(password, 10);

  return hashedPassword;
};

const userRegister = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username) {
    return res
      .status(400)
      .send({ username: { message: 'Username must be provided' } });
  }

  if (!password) {
    return res
      .status(400)
      .send({ password: { message: 'Password must be provided' } });
  }

  const user = findUser(username);

  if (user) {
    return res
      .status(400)
      .send({ username: { message: 'Username already taken' } });
  }

  const hashedPassword = await hashPassword(password);
  const id = uuid();

  const userData = {
    id,
    username,
    password: hashedPassword,
    files: [],
  };

  saveUser(userData);

  const accessToken = generateJsonWebToken(userData);
  const expire = Date.now() + EXPIRE_DAYS;

  return res.status(200).send({ id, accessToken, expire });
};

export { userRegister };
