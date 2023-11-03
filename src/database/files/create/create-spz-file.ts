import type { File, SpzForm } from '../../../types';

const createSpzFile = async (userId: string, file: File) => {
  const { id, title, type, dateOfCreation, dateOfUpdate, form } = file;
  const { info } = form as SpzForm;

  try {
    // do here

    return;
  } catch (error) {
    console.log(error);
  }
};

export { createSpzFile };
