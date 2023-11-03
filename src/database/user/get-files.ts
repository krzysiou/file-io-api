import { getPrzepisFiles } from '../fetching/get-przepis-files';
import { getSpzFiles } from '../fetching/get-spz-files';
import { getWypisFiles } from '../fetching/get-wypis-files';

const getFiles = async (userId: string) => {
  try {
    const spzFiles = await getSpzFiles(userId);
    const wypisFiles = await getWypisFiles(userId);
    const przepisFiles = await getPrzepisFiles(userId);

    return [...spzFiles, ...wypisFiles, ...przepisFiles];
  } catch (error) {
    console.log(error);
  }
};

export { getFiles };
