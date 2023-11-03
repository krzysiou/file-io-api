import type { Request, Response } from 'express';
import type { User } from '../../types';

import { getFiles } from '../../database/user/get-files';
import { deleteWypisFile } from '../../database/files/delete/delete-wypis-file';
import { deleteSpzFile } from '../../database/files/delete/delete-spz-file';
import { deletePrzepisFile } from '../../database/files/delete/delete-przepis-file';

const deleteFile = async (req: Request, res: Response) => {
  const requestingUser: User = req.body.user;
  const fileId: string = req.body.id;

  const files = await getFiles(requestingUser.id);
  if (!files) {
    return res.status(404).send('Could not find files for user');
  }

  const file = files.find((file) => file.id === fileId);
  if (!file) {
    return res.status(404).send({ message: 'File not found' });
  }

  switch (file.type) {
    case 'spz': {
      deleteSpzFile(fileId);
      break;
    }
    case 'wypis': {
      deleteWypisFile(fileId);
      break;
    }
    case 'przepis': {
      deletePrzepisFile(fileId);
      break;
    }
    default: {
      return;
    }
  }

  return res.status(200).send();
};

export { deleteFile };
