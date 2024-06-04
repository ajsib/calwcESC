import axios from 'axios';
import { File, Task, Ticket, Person, Subtask, TaskPerson, TicketPerson } from '@/public/Types/GlobalTypes';

export const fetchFileData = async (): Promise<File[]> => {
  try {
    const { data: files } = await axios.get<File[]>('/api/files');
    return files;
  } catch (error) {
    console.error('Error fetching file data:', error);
    throw error;
  }
};

export const fetchTaskData = async (personId: number): Promise<Task[]> => {
  try {
    const { data: tasksPeople } = await axios.get<TaskPerson[]>('/api/tasks_people');
    const { data: tasks } = await axios.get<Task[]>('/api/tasks');
    
    const taskIds = tasksPeople
      .filter(tp => tp.employee_id === personId)
      .map(tp => tp.task_id);

    const filteredTasks = tasks.filter(task => taskIds.includes(task.task_id));
    return filteredTasks;
  } catch (error) {
    console.error('Error fetching task data:', error);
    throw error;
  }
};

export const fetchTicketData = async (personId: number): Promise<Ticket[]> => {
  try {
    const { data: ticketsPeople } = await axios.get<TicketPerson[]>('/api/tickets_people');
    const { data: tickets } = await axios.get<Ticket[]>('/api/tickets');
    
    const ticketIds = ticketsPeople
      .filter(tp => tp.employee_id === personId)
      .map(tp => tp.ticket_id);

    const filteredTickets = tickets.filter(ticket => ticketIds.includes(ticket.ticket_id));
    return filteredTickets;
  } catch (error) {
    console.error('Error fetching ticket data:', error);
    throw error;
  }
};

export const fetchSubtaskDataById = async (taskId: number): Promise<Subtask[]> => {
  try {
    const { data: subtasks } = await axios.get<Subtask[]>('/api/subtasks');
    const filteredSubtasks = subtasks.filter(subtask => subtask.task_id === taskId);
    return filteredSubtasks;
  } catch (error) {
    console.error('Error fetching subtask data:', error);
    throw error;
  }
};

export const fetchPersonData = async (id: number): Promise<Person | null> => {
  try {
    const { data: people } = await axios.get<Person[]>('/api/people');
    const person = people.find(person => person.employee_id === id);
    return person || null;
  } catch (error) {
    console.error('Error fetching person data:', error);
    throw error;
  }
};
