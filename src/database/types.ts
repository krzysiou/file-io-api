interface DBUser {
  id: string;
  username: string;
  password: string;
}

interface DBFile {
  id: string;
  title: string;
  type: string;
  date_of_creation: number;
  date_of_update: number;
  user_id: string;
}

interface DBWypisForm {
  name: string;
  surname: string;
  album_number: string;
  field_of_study: string;
  email: string;
  faculty: string;
  dean: string;
  file_id: string;
}

type DBWypisFile = DBFile & DBWypisForm;

export type { DBUser, DBWypisFile };
