import type { Request, Response } from 'express';
import type { File, User } from '../../types';

import { findUser } from '../../utils/mock-user-database';
import { checkValidation } from '../../utils/validation';

const updateFile = async (req: Request, res: Response) => {
  const requestingUser: User = req.body.user;
  const requestingFile: File = req.body.file;

  const { title, type, form } = requestingFile;

  const payload = checkValidation(type, form);

  if (payload) {
    return res.status(400).send(payload);
  }

  if (!title) {
    return res.status(400).send({ message: 'You need to provide file title' });
  }

  const user = findUser({ id: requestingUser.id });
  if (!user) return res.status(404).send({ message: 'User not found' });

  // const foundFile = user.files!.find((file) => file.id === requestingFile.id);
  // if (!foundFile) return res.status(404).send({ message: 'File not found' });

  // const indexOfFile = user.files!.indexOf(foundFile);
  // user.files![indexOfFile] = requestingFile;

  return res.status(200).send();
};

export { updateFile };
