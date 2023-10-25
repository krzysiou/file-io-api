import type { Request, Response } from 'express';
import type { User } from '../../types';

import { findUser } from '../../utils/mock-user-database';

const getUserData = async (req: Request, res: Response) => {
  const requestingUser: User = req.body.user;

  const user = findUser({ id: requestingUser.id });

  return res.status(200).send(user);
};

export { getUserData };
