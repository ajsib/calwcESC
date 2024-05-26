import { Task, Ticket } from "@/public/Types/GlobalTypes";

export interface SearchResult{
    results: string;
};

export interface OverviewProps {
    tasks: Task[];
    tickets: Ticket[];
    counts: { taskCount: number, ticketCount: number, tasksDueTodayCount: number, highPriorityTicketsCount: number } | null;
}