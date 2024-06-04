import axios from 'axios';
import { Task } from '@/public/Types/GlobalTypes';

export const fetchTaskData = async (): Promise<Task[]> => {
  try {
    const { data: tasks } = await axios.get('/api/tasks');
    if (!Array.isArray(tasks)) {
      throw new Error('The response data is not an array.');
    }
    return tasks as Task[];
  } catch (error) {
    console.error('Error fetching task data:', error);
    throw error;
  }
};
