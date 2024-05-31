import axios from 'axios';
import { Ticket } from '@/public/Types/GlobalTypes';

export const fetchTicketById = async (ticketId: number): Promise<Ticket | null> => {
  try {
    const { data: tickets } = await axios.get('/api/tickets');
    const ticket = tickets.find((t: Ticket) => t.ticket_id === ticketId);
    return ticket || null;
  } catch (error) {
    console.error('Error fetching ticket by ID:', error);
    throw error;
  }
};
