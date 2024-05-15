import { File } from "../../Types";
import dummyData from "../../files-dummy.json";

export const fetchFileData = async (): Promise<File[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyData);
      }, 500); // Simulate network delay
    });
  };
