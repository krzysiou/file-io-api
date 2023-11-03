import type { File, PrzepisForm } from '../../../types';

const createPrzepisFile = async (userId: string, file: File) => {
  const { id, title, type, dateOfCreation, dateOfUpdate, form } = file;
  const { name, surname, albumNumber, email, fieldOfStudy, dean } =
    form as PrzepisForm;

  try {
    // do here

    return;
  } catch (error) {
    console.log(error);
  }
};

export { createPrzepisFile };
