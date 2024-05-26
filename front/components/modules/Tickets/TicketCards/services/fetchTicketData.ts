import { Ticket } from "@/public/Types/GlobalTypes";
import TicketData from "@/public/Database/Tickets.json";

const fetchTicketData = async (): Promise<Ticket[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(TicketData.Tickets);
        }, 500); // Simulate network delay
    });
};

export default fetchTicketData;