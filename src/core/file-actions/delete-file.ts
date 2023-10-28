import type { Request, Response } from 'express';
import type { User } from '../../types';

import { findUser } from '../../utils/mock-user-database';

const deleteFile = async (req: Request, res: Response) => {
  const requestingUser: User = req.body.user;
  const fileId: string = req.body.id;

  const user = findUser({ id: requestingUser.id });
  if (!user) return res.status(404).send({ message: 'User not found' });

  const file = user.files.find((file) => file.id === fileId);
  if (!file) return res.status(404).send({ message: 'File not found' });

  const indexOfFile = user.files.indexOf(file);
  user.files.splice(indexOfFile, 1);

  return res.status(200).send();
};

export { deleteFile };
