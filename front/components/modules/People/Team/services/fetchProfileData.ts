import axios from 'axios';
import { Person as Profile } from '@/public/Types/GlobalTypes';

export const fetchProfileData = async (): Promise<Profile[]> => {
  try {
    const { data: people } = await axios.get('/api/people');
    return people as Profile[];
  } catch (error) {
    console.error('Error fetching profile data:', error);
    throw error;
  }
};
