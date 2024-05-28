import { Task, Ticket } from '@/public/Types/GlobalTypes';
import TasksPeopleData from '@/public/Database/Tasks-People.json';
import TicketsPeopleData from '@/public/Database/Tickets-People.json';
import TasksData from '@/public/Database/Tasks.json';
import TicketsData from '@/public/Database/Tickets.json';

export const fetchIdsByEmployeeId = async (employeeId: number): Promise<{ taskIds: number[], ticketIds: number[] }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const taskIds = TasksPeopleData.Tasks_People
        .filter(tp => tp.employee_id === employeeId)
        .map(tp => tp.task_id);

      const ticketIds = TicketsPeopleData.Tickets_People
        .filter(tp => tp.employee_id === employeeId)
        .map(tp => tp.ticket_id);

      resolve({ taskIds, ticketIds });
    }, 500); // Simulate network delay
  });
};

export const fetchTasksAndTickets = async (taskIds: number[], ticketIds: number[]): Promise<{ tasks: Task[], tickets: Ticket[] }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tasks = TasksData.Tasks.filter(task => taskIds.includes(task.task_id));
      const tickets = TicketsData.Tickets.filter(ticket => ticketIds.includes(ticket.ticket_id));
      resolve({ tasks, tickets });
    }, 500); // Simulate network delay
  });
};

export const countTasksAndTickets = async (employeeId: number): Promise<{ taskCount: number, ticketCount: number, tasksDueTodayCount: number, highPriorityTicketsCount: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const today = new Date().toISOString().split('T')[0];

      const taskIds = TasksPeopleData.Tasks_People
        .filter(tp => tp.employee_id === employeeId)
        .map(tp => tp.task_id);

      const ticketIds = TicketsPeopleData.Tickets_People
        .filter(tp => tp.employee_id === employeeId)
        .map(tp => tp.ticket_id);

      const tasks = TasksData.Tasks.filter(task => taskIds.includes(task.task_id));
      const tickets = TicketsData.Tickets.filter(ticket => ticketIds.includes(ticket.ticket_id));

      const tasksDueTodayCount = tasks.filter(task => task.due_date === today).length;
      const highPriorityTicketsCount = tickets.filter(ticket => ticket.priority === 'High').length;

      resolve({
        taskCount: tasks.length,
        ticketCount: tickets.length,
        tasksDueTodayCount,
        highPriorityTicketsCount
      });
    }, 500); // Simulate network delay
  });
};

export const fetchTicketsBySponsorName = async (sponsorName: string): Promise<Ticket[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tickets = TicketsData.Tickets.filter(ticket => ticket.sponsor === sponsorName);
      resolve(tickets);
    }, 500); // Simulate network delay
  });
};

export const countTicketsBySponsorName = async (sponsorName: string): Promise<{ total: number, open: number, closed: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tickets = TicketsData.Tickets.filter(ticket => ticket.sponsor === sponsorName);
      const total = tickets.length;
      const open = tickets.filter(ticket => ticket.status.toLowerCase() === 'open').length;
      const closed = tickets.filter(ticket => ticket.status.toLowerCase() === 'closed').length;

      resolve({
        total,
        open,
        closed
      });
    }, 500); // Simulate network delay
  });
};
