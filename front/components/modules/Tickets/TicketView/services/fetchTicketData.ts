// services/api.ts
import TicketsData from '@/public/Database/Tickets.json';
import { Ticket } from '@/public/Types/GlobalTypes';

export const fetchTicketById = async (ticketId: number): Promise<Ticket | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const ticket = TicketsData.Tickets.find(t => t.ticket_id === ticketId);
      resolve(ticket || null);
    }, 500); // Simulate network delay
  });
};
