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

type FileType = 'spz' | 'wypis';

type Form = SpzForm | WypisForm;

type SpzInfo = {
  name: string;
  surname: string;
  albumNumber: string;
  fieldOfStudy: string;
  email: string;
  level: string;
  term: string;
  year: string;
  dean: string;
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

type WypisForm = {
  name: string;
  surname: string;
  albumNumber: string;
  fieldOfStudy: string;
  email: string;
  faculty: string;
  dean: string;
};

interface File {
  id: string;
  title: string;
  type: FileType;
  dateOfCreation: number;
  dateOfUpdate: number;
  form: Form;
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
  Form,
  FileType,
  SpzForm,
  WypisForm,
};
