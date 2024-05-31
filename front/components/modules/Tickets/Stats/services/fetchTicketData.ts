import axios from 'axios';
import { Ticket, TicketPerson } from '@/public/Types/GlobalTypes';

const fetchTicketData = async (): Promise<Ticket[]> => {
  try {
    const { data: tickets } = await axios.get<Ticket[]>('/api/tickets');
    return tickets;
  } catch (error) {
    console.error('Error fetching ticket data:', error);
    throw error;
  }
};

const fetchTicketIdsByUserId = async (employeeId: number): Promise<number[]> => {
  try {
    const { data: ticketsPeople } = await axios.get<TicketPerson[]>('/api/tickets_people');
    const ticketIds = ticketsPeople
      .filter(tp => tp.employee_id === employeeId)
      .map(tp => tp.ticket_id);
    return ticketIds;
  } catch (error) {
    console.error('Error fetching ticket IDs by user ID:', error);
    throw error;
  }
};

const fetchTicketsByIds = async (ticketIds: number[]): Promise<{ open: number; high: number; medium: number; low: number }> => {
  try {
    const { data: tickets } = await axios.get<Ticket[]>('/api/tickets');
    const filteredTickets = tickets.filter(ticket => ticketIds.includes(ticket.ticket_id));
    const open = filteredTickets.filter(ticket => ticket.status === 'Open').length;
    const high = filteredTickets.filter(ticket => ticket.priority === 'High').length;
    const medium = filteredTickets.filter(ticket => ticket.priority === 'Medium').length;
    const low = filteredTickets.filter(ticket => ticket.priority === 'Low').length;
    return { open, high, medium, low };
  } catch (error) {
    console.error('Error fetching tickets by IDs:', error);
    throw error;
  }
};

const fetchAllTicketStats = async (): Promise<{ open: number; high: number; medium: number; low: number }> => {
  try {
    const { data: tickets } = await axios.get<Ticket[]>('/api/tickets');
    const open = tickets.filter(ticket => ticket.status === 'Open').length;
    const high = tickets.filter(ticket => ticket.priority === 'High').length;
    const medium = tickets.filter(ticket => ticket.priority === 'Medium').length;
    const low = tickets.filter(ticket => ticket.priority === 'Low').length;
    return { open, high, medium, low };
  } catch (error) {
    console.error('Error fetching all ticket stats:', error);
    throw error;
  }
};

export { fetchTicketData, fetchTicketIdsByUserId, fetchTicketsByIds, fetchAllTicketStats };
