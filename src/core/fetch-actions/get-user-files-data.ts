import type { Request, Response } from 'express';
import type { User } from '../../types';

import { getFiles } from '../../database/user/get-files';

const getUserFilesData = async (req: Request, res: Response) => {
  const { id }: User = req.body.user;

  const files = await getFiles(id);
  if (!files) {
    return res.status(404).send('Could not find files for user');
  }

  return res.status(200).send(files);
};

export { getUserFilesData };
