import {Ticket} from "@/public/Types/GlobalTypes";

export interface StatsProps {
    openTickets: Ticket[];
    highPriorityTickets: Ticket[];
    mediumPriorityTickets: Ticket[];
    lowPriorityTickets: Ticket[];
}