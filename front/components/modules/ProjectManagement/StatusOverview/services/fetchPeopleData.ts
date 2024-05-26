import { Person } from '@/public/Types/GlobalTypes';
import PeopleData from '@/public/Database/People.json';

export const fetchPeopleData = async (): Promise<Person[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PeopleData.People);
    }, 500); // Simulate network delay
  });
};
