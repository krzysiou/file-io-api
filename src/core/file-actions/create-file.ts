import { v4 as uuid } from 'uuid';

import type { Request, Response } from 'express';
import type { User, File } from '../../types';

import { findUser } from '../../utils/mock-user-database';

const createFile = async (req: Request, res: Response) => {
  const requestingUser: User = req.body.user;
  const requestingFile: File = req.body.file;

  const { title, form } = requestingFile;
  const { info, mainSubjects } = form;
  const {
    name,
    surname,
    albumNumber,
    fieldOfStudy,
    email,
    level,
    term,
    year,
    dean,
  } = info;

  if (
    !title ||
    !name ||
    !surname ||
    !albumNumber ||
    !fieldOfStudy ||
    !email ||
    !level ||
    !term ||
    !year ||
    !dean ||
    mainSubjects.length === 0
  ) {
    return res
      .status(400)
      .send({ message: 'You need to provide all information' });
  }

  const id = uuid();
  const user = findUser({ id: requestingUser.id });

  if (!user) {
    return res.status(404).send({ message: 'You do not have an account' });
  }

  user.files.push({
    ...requestingFile,
    id,
  });

  return res.status(200).send();
};

export { createFile };
