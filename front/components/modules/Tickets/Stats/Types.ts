export interface Ticket {
    id: string;
    title: string;
    status: string;
    priority: string;
    date: string;
    assignedTo: string;
    description: string;
  }

export interface StatsProps {
    openTickets: Ticket[];
    highPriorityTickets: Ticket[];
    mediumPriorityTickets: Ticket[];
    lowPriorityTickets: Ticket[];
}