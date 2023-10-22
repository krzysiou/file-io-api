import type { Request, Response } from 'express';
import type { User } from '../../types';

import { mockUserDatabase } from '../../utils/mock-user-database';

const getUserData = async (req: Request, res: Response) => {
  const requestingUser: User = req.body.user;

  const user = mockUserDatabase.find((user) => user.id === requestingUser.id);

  return res.status(200).send(user);
};

export { getUserData };
