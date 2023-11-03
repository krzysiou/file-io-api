import type { File, PrzepisForm } from '../../../types';

const updatePrzepisFile = async (fileId: string, file: File) => {
  const { id, title, type, dateOfCreation, dateOfUpdate, form } = file;
  const { name } = form as PrzepisForm;

  try {
    // do here

    return;
  } catch (error) {
    console.log(error);
  }
};

export { updatePrzepisFile };
