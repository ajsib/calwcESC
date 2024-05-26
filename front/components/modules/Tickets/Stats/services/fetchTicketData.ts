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

const fetchTicketsByIds = async (ticketIds: number[]): Promise<{ open: number, high: number, medium: number, low: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tickets = TicketData.Tickets.filter(ticket => ticketIds.includes(ticket.ticket_id));
      const open = tickets.filter(ticket => ticket.status === "Open").length;
      const high = tickets.filter(ticket => ticket.priority === "High").length;
      const medium = tickets.filter(ticket => ticket.priority === "Medium").length;
      const low = tickets.filter(ticket => ticket.priority === "Low").length;
      resolve({ open, high, medium, low });
    }, 500); // Simulate network delay
  });
};

const fetchAllTicketStats = async (): Promise<{ open: number, high: number, medium: number, low: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tickets = TicketData.Tickets;
      const open = tickets.filter(ticket => ticket.status === "Open").length;
      const high = tickets.filter(ticket => ticket.priority === "High").length;
      const medium = tickets.filter(ticket => ticket.priority === "Medium").length;
      const low = tickets.filter(ticket => ticket.priority === "Low").length;
      resolve({ open, high, medium, low });
    }, 500); // Simulate network delay
  });
};

export { fetchTicketData, fetchTicketIdsByUserId, fetchTicketsByIds, fetchAllTicketStats };
