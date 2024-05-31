import axios from 'axios';
import { File } from '@/public/Types/GlobalTypes';

export const fetchFileData = async (): Promise<File[]> => {
  try {
    const { data: files } = await axios.get('/api/files');
    return files;
  } catch (error) {
    console.error('Error fetching file data:', error);
    throw error;
  }
};
