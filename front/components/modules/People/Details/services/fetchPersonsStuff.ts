import dummyFiles from '../../files-dummy.json';
import dummyTasks from '../../tasks-dummy.json';
import dummyTickets from '../../tickets-dummy.json';
import { Ticket, Task, File } from '../Types';

export const fetchFileData = async (): Promise<File[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(dummyFiles);
        }, 500); // Simulate network delay
    });
};


export const fetchTaskData = async (): Promise<Task[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(dummyTasks);
        }, 500); // Simulate network delay
    });
};

export const fetchTicketData = async (): Promise<Ticket[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(dummyTickets);
        }, 500); // Simulate network delay
    });
};