import TaskData from '@/public/Database/Tasks.json';
import PeopleData from '@/public/Database/People.json';
import { Task, Person } from '@/public/Types/GlobalTypes';


export const fetchTaskData = async (): Promise<Task[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(TaskData.Tasks);
      }, 500); // Simulate network delay
    });
  };

export const fetchPeopleData = async (): Promise<Person[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(PeopleData.People);
      }, 500); // Simulate network delay
    });
  };