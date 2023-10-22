import { v4 as uuid } from 'uuid';

import type { Request, Response } from 'express';
import type { User, File } from '../../types';

import { mockUserDatabase } from '../../utils/mock-user-database';

const createFile = async (req: Request, res: Response) => {
  const requestingUser: User = req.body.user;

  const { title, type, dateOfCreation, dateOfUpdate, form } = req.body
    .file as File;
  const { info, mainSubjects } = form;
  const { name, surname, albumNumber, fieldOfStudy, email, level, term, year } =
    info;

  const id = uuid();

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
    mainSubjects.length === 0
  ) {
    return res
      .status(400)
      .send({ message: 'You need to provide all information' });
  }

  const user = mockUserDatabase.find((user) => user.id === requestingUser.id);

  const file: File = {
    id,
    title,
    type,
    dateOfCreation,
    dateOfUpdate,
    form,
  };

  user?.files.push(file);

  return res.status(200).send();
};

export { createFile };
