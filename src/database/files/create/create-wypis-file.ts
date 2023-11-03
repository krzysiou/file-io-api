import type { File, WypisForm } from '../../../types';

import { PostgresClient } from '../../postgress-client';

const createWypisFile = async (userId: string, file: File) => {
  const { id, title, type, dateOfCreation, dateOfUpdate, form } = file;
  const { name, surname, albumNumber, email, fieldOfStudy, faculty, dean } =
    form as WypisForm;

  try {
    await PostgresClient.query(
      `INSERT INTO files VALUES('${id}', '${title}', '${type}', ${dateOfCreation}, ${dateOfUpdate}, '${userId}')`
    );

    await PostgresClient.query(
      `INSERT INTO wypis_forms VALUES('${name}', '${surname}', '${albumNumber}', '${email}', '${fieldOfStudy}', '${faculty}', '${dean}', '${id}')`
    );
  } catch (error) {
    console.log(error);
  }
};

export { createWypisFile };
