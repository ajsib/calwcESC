import { File, Task, Ticket } from '@/public/Types/GlobalTypes';

export interface CardDisplayProps {
    ticketsData: Ticket[];
    filesData: File[];
    tasksData: Task[];
    selectedTab: string;
}