import TaskData from '@/public/Database/Tasks.json';
import PeopleData from '@/public/Database/People.json';
import SubtasksData from '@/public/Database/Subtasks.json';
import TasksPeopleData from '@/public/Database/Tasks-People.json';
import { Task, Person, Subtask } from '@/public/Types/GlobalTypes';

export const fetchTaskData = async (): Promise<Task[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tasks = TaskData.Tasks.map(task => ({
        ...task,
        subTasks: SubtasksData.Subtasks.filter(subtask => subtask.task_id === task.task_id),
        people: TasksPeopleData.Tasks_People
          .filter(tp => tp.task_id === task.task_id)
          .map(tp => PeopleData.People.find(person => person.employee_id === tp.employee_id))
          .filter(person => person !== undefined) as Person[]
      }));
      resolve(tasks);
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

export const fetchSubtasksByTaskId = async (taskId: number): Promise<Subtask[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const subtasks = SubtasksData.Subtasks.filter(subtask => subtask.task_id === taskId);
      resolve(subtasks);
    }, 500); // Simulate network delay
  });
};

export const fetchPeopleAssignedToTask = async (taskId: number): Promise<Person[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const people = TasksPeopleData.Tasks_People
        .filter(tp => tp.task_id === taskId)
        .map(tp => PeopleData.People.find(person => person.employee_id === tp.employee_id))
        .filter(person => person !== undefined) as Person[];
      resolve(people);
    }, 500); // Simulate network delay
  });
};
