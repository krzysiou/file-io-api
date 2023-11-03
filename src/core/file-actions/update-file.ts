import type { Request, Response } from 'express';
import type { File, User } from '../../types';

import { checkValidation } from '../../utils/validation';
import { getFiles } from '../../database/user/get-files';
import { updateWypisFile } from '../../database/files/update/update-wypis-file';
import { updateSpzFile } from '../../database/files/update/update-spz-file';
import { updatePrzepisFile } from '../../database/files/update/update-przepis-file';

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

  const files = await getFiles(requestingUser.id);
  if (!files) {
    return res.status(404).send('Could not find files for user');
  }

  const file = files.find((file) => file.id === requestingFile.id);
  if (!file) {
    return res.status(404).send({ message: 'File not found' });
  }

  switch (file.type) {
    case 'spz': {
      updateSpzFile(requestingFile.id, requestingFile);
      break;
    }
    case 'wypis': {
      updateWypisFile(requestingFile.id, requestingFile);
      break;
    }
    case 'przepis': {
      updatePrzepisFile(requestingFile.id, requestingFile);
      break;
    }
    default: {
      return;
    }
  }

  return res.status(200).send();
};

export { updateFile };
