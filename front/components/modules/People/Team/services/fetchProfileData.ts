import { Profile } from '../../Types';
import dummyData from '../../profiles-dummy.json';

export const fetchProfileData = async (): Promise<Profile[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 500); // Simulate network delay
  });
};
