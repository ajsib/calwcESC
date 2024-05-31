import axios from 'axios';
import { Ticket } from '@/public/Types/GlobalTypes';

const fetchTicketData = async (): Promise<Ticket[]> => {
  try {
    const { data: tickets } = await axios.get('/api/tickets');
    return tickets;
  } catch (error) {
    console.error('Error fetching ticket data:', error);
    throw error;
  }
};

const fetchTicketIdsByUserId = async (employeeId: number): Promise<number[]> => {
  try {
    const { data: ticketsPeople } = await axios.get('/api/tickets_people');
    const ticketIds = ticketsPeople
      .filter((tp: { employee_id: number }) => tp.employee_id === employeeId)
      .map((tp: { ticket_id: number }) => tp.ticket_id);
    return ticketIds;
  } catch (error) {
    console.error('Error fetching ticket IDs by user ID:', error);
    throw error;
  }
};

const fetchTicketsByIds = async (ticketIds: number[]): Promise<Ticket[]> => {
  try {
    const { data: tickets } = await axios.get('/api/tickets');
    const filteredTickets = tickets.filter((ticket: Ticket) => ticketIds.includes(ticket.ticket_id));
    return filteredTickets;
  } catch (error) {
    console.error('Error fetching tickets by IDs:', error);
    throw error;
  }
};

export { fetchTicketData, fetchTicketIdsByUserId, fetchTicketsByIds };
