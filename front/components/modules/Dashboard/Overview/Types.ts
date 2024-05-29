import { Task, Ticket } from "@/public/Types/GlobalTypes";

export interface SearchResult{
    results: string;
};

export interface OverviewProps {
    tasks: Task[];
    tickets: Ticket[];
    counts: { taskCount: number, ticketCount: number, tasksDueTodayCount: number, highPriorityTicketsCount: number } | null;
}

export interface ClientOverviewProps {
    tickets: Ticket[];
    counts: { total: number, open: number, closed: number } | null;
}

export interface MyDayProps {
    counts: { taskCount: number, ticketCount: number, tasksDueTodayCount: number, highPriorityTicketsCount: number } | null;
}

export interface MyDayListProps {
    tasks: Task[];
    tickets: Ticket[];
}