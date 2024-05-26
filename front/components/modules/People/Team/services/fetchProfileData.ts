import { Person as Profile } from '@/public/Types/GlobalTypes';
import PersonData from '@/public/Database/People.json';

export const fetchProfileData = async (): Promise<Profile[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PersonData.People);
    }, 500); // Simulate network delay
  });
};
