import type { Request, Response } from 'express';
import type { File, User } from '../../types';

import { mockUserDatabase } from '../../utils/mock-user-database';

const updateFile = async (req: Request, res: Response) => {
  const requestingUser: User = req.body.user;
  const requestingFile = req.body.file as File;

  const user = mockUserDatabase.find((user) => user.id === requestingUser.id);

  if (!user) return res.status(404).send({ message: 'User not found' });

  const foundFile = user.files.find((file) => file.id === requestingFile.id);

  if (!foundFile) return res.status(404).send({ message: 'File not found' });

  const indexOfFile = user.files.indexOf(foundFile);

  user.files[indexOfFile] = requestingFile;

  return res.status(200).send();
};

export { updateFile };
