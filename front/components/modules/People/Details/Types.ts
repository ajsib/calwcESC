import { File, Task, Ticket, Subtask } from '@/public/Types/GlobalTypes';

export interface CardDisplayProps {
    ticketsData: Ticket[];
    filesData: File[];
    tasksData: Task[];
    selectedTab: string;
    subtasksData: { [key: number]: Subtask[] };
}

export interface TaskCardProps {
    title: string;
    dueDate: string;
    isComplete: boolean;
    subTasks: Subtask[];
    status: string;
    bucket: string;
  }