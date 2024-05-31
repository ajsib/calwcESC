import axios from 'axios';
import { Task, Ticket, TaskPerson, TicketPerson } from '@/public/Types/GlobalTypes';

export const fetchIdsByEmployeeId = async (employeeId: number): Promise<{ taskIds: number[], ticketIds: number[] }> => {
  try {
    const { data: tasksPeople } = await axios.get<TaskPerson[]>('/api/tasks_people');
    const { data: ticketsPeople } = await axios.get<TicketPerson[]>('/api/tickets_people');

    const taskIds = tasksPeople
      .filter(tp => tp.employee_id === employeeId)
      .map(tp => tp.task_id);

    const ticketIds = ticketsPeople
      .filter(tp => tp.employee_id === employeeId)
      .map(tp => tp.ticket_id);

    return { taskIds, ticketIds };
  } catch (error) {
    console.error('Error fetching IDs by employee ID:', error);
    throw error;
  }
};

export const fetchTasksAndTickets = async (taskIds: number[], ticketIds: number[]): Promise<{ tasks: Task[], tickets: Ticket[] }> => {
  try {
    const { data: tasks } = await axios.get<Task[]>('/api/tasks');
    const { data: tickets } = await axios.get<Ticket[]>('/api/tickets');

    const filteredTasks = tasks.filter(task => taskIds.includes(task.task_id));
    const filteredTickets = tickets.filter(ticket => ticketIds.includes(ticket.ticket_id));

    return { tasks: filteredTasks, tickets: filteredTickets };
  } catch (error) {
    console.error('Error fetching tasks and tickets:', error);
    throw error;
  }
};

export const countTasksAndTickets = async (employeeId: number): Promise<{ taskCount: number, ticketCount: number, tasksDueTodayCount: number, highPriorityTicketsCount: number }> => {
  try {
    const today = new Date().toISOString().split('T')[0];

    const { data: tasksPeople } = await axios.get<TaskPerson[]>('/api/tasks_people');
    const { data: ticketsPeople } = await axios.get<TicketPerson[]>('/api/tickets_people');
    const { data: tasks } = await axios.get<Task[]>('/api/tasks');
    const { data: tickets } = await axios.get<Ticket[]>('/api/tickets');

    const taskIds = tasksPeople
      .filter(tp => tp.employee_id === employeeId)
      .map(tp => tp.task_id);

    const ticketIds = ticketsPeople
      .filter(tp => tp.employee_id === employeeId)
      .map(tp => tp.ticket_id);

    const filteredTasks = tasks.filter(task => taskIds.includes(task.task_id));
    const filteredTickets = tickets.filter(ticket => ticketIds.includes(ticket.ticket_id));

    const tasksDueTodayCount = filteredTasks.filter(task => task.due_date === today).length;
    const highPriorityTicketsCount = filteredTickets.filter(ticket => ticket.priority === 'High').length;

    return {
      taskCount: filteredTasks.length,
      ticketCount: filteredTickets.length,
      tasksDueTodayCount,
      highPriorityTicketsCount
    };
  } catch (error) {
    console.error('Error counting tasks and tickets:', error);
    throw error;
  }
};

export const fetchTicketsBySponsorName = async (sponsorName: string): Promise<Ticket[]> => {
  try {
    const { data: tickets } = await axios.get<Ticket[]>('/api/tickets');
    const filteredTickets = tickets.filter(ticket => ticket.sponsor === sponsorName);
    return filteredTickets;
  } catch (error) {
    console.error('Error fetching tickets by sponsor name:', error);
    throw error;
  }
};

export const countTicketsBySponsorName = async (sponsorName: string): Promise<{ total: number, open: number, closed: number }> => {
  try {
    const { data: tickets } = await axios.get<Ticket[]>('/api/tickets');
    const filteredTickets = tickets.filter(ticket => ticket.sponsor === sponsorName);

    const total = filteredTickets.length;
    const open = filteredTickets.filter(ticket => ticket.status.toLowerCase() === 'open').length;
    const closed = filteredTickets.filter(ticket => ticket.status.toLowerCase() === 'closed').length;

    return {
      total,
      open,
      closed
    };
  } catch (error) {
    console.error('Error counting tickets by sponsor name:', error);
    throw error;
  }
};
