import { Ticket } from "@/public/Types/GlobalTypes";
import TicketData from "@/public/Database/Tickets.json";
import TicketsPeopleData from "@/public/Database/Tickets-People.json";

const fetchTicketData = async (): Promise<Ticket[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(TicketData.Tickets);
    }, 500); // Simulate network delay
  });
};

const fetchTicketIdsByUserId = async (employeeId: number): Promise<number[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const ticketIds = TicketsPeopleData.Tickets_People
        .filter(tp => tp.employee_id === employeeId)
        .map(tp => tp.ticket_id);
      resolve(ticketIds);
    }, 500); // Simulate network delay
  });
};

const fetchTicketsByIds = async (ticketIds: number[]): Promise<Ticket[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tickets = TicketData.Tickets.filter(ticket => ticketIds.includes(ticket.ticket_id));
      resolve(tickets);
    }, 500); // Simulate network delay
  });
};

export { fetchTicketData, fetchTicketIdsByUserId, fetchTicketsByIds };
