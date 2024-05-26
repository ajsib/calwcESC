import FileData from '@/public/Database/Files.json';
import TaskData from '@/public/Database/Tasks.json';
import TicketData from '@/public/Database/Tickets.json';
import PeopleData from '@/public/Database/People.json';
import SubtasksData from '@/public/Database/Subtasks.json';
import TicketsPeopleData from '@/public/Database/Tickets-People.json';
import TasksPeopleData from '@/public/Database/Tasks-People.json';
import { Ticket, Task, File } from '@/public/Types/GlobalTypes';

export const fetchFileData = async (): Promise<File[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(FileData.Files);
        }, 500); // Simulate network delay
    });
};

export const fetchTaskData = async (personId: number): Promise<Task[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const taskIds = TasksPeopleData.Tasks_People
                .filter(tp => tp.employee_id === personId)
                .map(tp => tp.task_id);
            const tasks = TaskData.Tasks.filter(task => taskIds.includes(task.task_id));
            resolve(tasks);
        }, 500); // Simulate network delay
    });
};

export const fetchTicketData = async (personId: number): Promise<Ticket[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const ticketIds = TicketsPeopleData.Tickets_People
                .filter(tp => tp.employee_id === personId)
                .map(tp => tp.ticket_id);
            const tickets = TicketData.Tickets.filter(ticket => ticketIds.includes(ticket.ticket_id));
            resolve(tickets);
        }, 500); // Simulate network delay
    });
};

export const fetchSubtaskDataById = async (taskId: number): Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(SubtasksData.Subtasks.filter(subtask => subtask.task_id === taskId));
        }, 500); // Simulate network delay
    });
};

export const fetchPersonData = async (id: number): Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const person = PeopleData.People.find(person => person.employee_id === id);
            resolve(person || { message: "Person not found" });
        }, 500); // Simulate network delay
    });
};
