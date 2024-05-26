import FileData from '@/public/Database/Files.json';
import TaskData from '@/public/Database/Tasks.json';
import TicketData from '@/public/Database/Tickets.json';
import PeopleData from '@/public/Database/People.json';
import { Ticket, Task, File } from '@/public/Types/GlobalTypes';

export const fetchFileData = async (): Promise<File[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(FileData.Files);
        }, 500); // Simulate network delay
    });
};


export const fetchTaskData = async (): Promise<Task[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(TaskData.Tasks);
        }, 500); // Simulate network delay
    });
};

export const fetchTicketData = async (): Promise<Ticket[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(TicketData.Tickets);
        }, 500); // Simulate network delay
    });
};

export const fetchPersonData = async (name: string): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const person = PeopleData.People.find(person => person.name.toLowerCase() === name.toLowerCase());
        resolve(person || { message: "Person not found" });
      }, 500); // Simulate network delay
    });
  };