// THIS IS TEMPORARY FILE

import type { Request, Response } from 'express';

import { mockUserDatabase } from '../utils/mock-user-database';

const checkUsers = async (req: Request, res: Response) => {
  return res.status(200).send(mockUserDatabase);
};

export { checkUsers };
