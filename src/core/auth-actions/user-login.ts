import { compare } from 'bcrypt';

import type { Request, Response } from 'express';

import { EXPIRE_DAYS, generateJsonWebToken } from '../../utils/jwt-actions';
import { findUser } from '../../utils/mock-user-database';

const validatePassword = async (
  passedPassword: string,
  validHashedPassword: string
): Promise<boolean> => {
  const passwordMatching = await compare(passedPassword, validHashedPassword);

  return passwordMatching;
};

const userLogin = async (req: Request, res: Response) => {
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

  if (!user) {
    return res.status(404).send({ username: { message: 'User not found' } });
  }

  const passwordMatching = await validatePassword(password, user.password);

  if (!passwordMatching) {
    return res.status(401).send({ password: { message: 'Invalid password' } });
  }

  const accessToken = generateJsonWebToken(user);
  const expire = Date.now() + EXPIRE_DAYS;
  const id = user.id;

  return res.status(200).send({ id, accessToken, expire });
};

export { userLogin };
