import type { Request, Response } from 'express';
import type { User } from '../../types';

import { findUser } from '../../utils/mock-user-database';

const getFileData = async (req: Request, res: Response) => {
  const requestingUser: User = req.body.user;
  const id = req.body.id;

  const user = findUser({ id: requestingUser.id });
  if (!user) return res.status(404).send({ message: 'User not found' });

  const file = user.files.find((file) => file.id === id);
  if (!file) return res.status(404).send({ message: 'File not found' });

  return res.status(200).send(file);
};

export { getFileData };
