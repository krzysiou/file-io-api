import type { NextFunction, Request, Response } from 'express';

type RequestMethod = 'GET' | 'POST';

type expressCallback = (req: Request, res: Response) => void;

type expressMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

interface Binding {
  method: RequestMethod;
  path: string;
  callback: expressCallback;
  middleware?: expressMiddleware | expressMiddleware[];
}

type FileType = 'spz' | 'status-studenta';

type SpzInfo = {
  name: string;
  surname: string;
  albumNumber: string;
  fieldOfStudy: string;
  email: string;
  level: string;
  term: string;
  year: string;
};

type MainSubject = {
  name: string;
  wclps: string;
  ects: string;
};

type SideSubject = {
  name: string;
  wclps: string;
  ects: string;
  faculty: string;
};

interface SpzForm {
  info: SpzInfo;
  mainSubjects: MainSubject[];
  sideSubjects: SideSubject[];
}

interface File {
  id: string;
  title: string;
  type: FileType;
  dateOfCreation: number;
  dateOfUpdate: number;
  form: SpzForm;
}

interface User {
  id: string;
  username: string;
  password: string;
  files: File[];
}

export type {
  RequestMethod,
  expressCallback,
  expressMiddleware,
  Binding,
  User,
  File,
};