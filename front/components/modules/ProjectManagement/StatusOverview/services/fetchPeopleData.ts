import axios from 'axios';
import { Person } from '@/public/Types/GlobalTypes';

export const fetchPeopleData = async (): Promise<Person[]> => {
  try {
    const { data: people } = await axios.get('/api/people');
    if (!Array.isArray(people)) {
      throw new Error('The response data is not an array.');
    }
    return people as Person[];
  } catch (error) {
    console.error('Error fetching people data:', error);
    throw error;
  }
};
