import TaskData from '@/public/Database/Tasks.json';
import { Task } from '@/public/Types/GlobalTypes';


export const fetchTaskData = async (): Promise<Task[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(TaskData.Tasks);
      }, 500); // Simulate network delay
    });
  };