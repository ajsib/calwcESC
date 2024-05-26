import { File } from '@/public/Types/GlobalTypes';
import FilesData from "@/public/Database/Files.json";

export const fetchFileData = async (): Promise<File[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FilesData.Files);
    }, 500); // Simulate network delay
  });
};
