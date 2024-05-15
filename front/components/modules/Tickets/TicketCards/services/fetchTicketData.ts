import { Ticket } from "../Types";
import TicketData from "../../tickets-dummy.json";

const fetchTicketData = async (): Promise<Ticket[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(TicketData);
        }, 500); // Simulate network delay
    });
};

export default fetchTicketData;