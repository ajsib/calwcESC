import TaskData from '../../tasks-dummy.json';
import { Task } from '../../Types';


export const fetchTaskData = async (): Promise<Task[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(TaskData);
      }, 500); // Simulate network delay
    });
  };