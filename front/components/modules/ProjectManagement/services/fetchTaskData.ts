import TaskData from '@/public/Database/Tasks.json';
import PeopleData from '@/public/Database/People.json';
import SubtasksData from '@/public/Database/Subtasks.json';
import TasksPeopleData from '@/public/Database/Tasks-People.json';
import TicketsPeopleData from '@/public/Database/Tickets-People.json';
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

export const fetchTasksAssignedToUser = async (employeeId: number): Promise<Task[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Tasks directly assigned to the user
      const directTaskIds = TasksPeopleData.Tasks_People
        .filter(tp => tp.employee_id === employeeId)
        .map(tp => tp.task_id);

      // Tickets assigned to the user
      const ticketIds = TicketsPeopleData.Tickets_People
        .filter(tp => tp.employee_id === employeeId)
        .map(tp => tp.ticket_id);

      // Tasks associated with those tickets
      const ticketTaskIds = TaskData.Tasks
        .filter(task => ticketIds.includes(task.ticket_id))
        .map(task => task.task_id);

      // Combine and deduplicate task IDs
      const allTaskIds = Array.from(new Set([...directTaskIds, ...ticketTaskIds]));

      // Fetch tasks based on combined task IDs
      const tasks = TaskData.Tasks.filter(task => allTaskIds.includes(task.task_id)).map(task => ({
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
