import { Task, Subtask as SubTask, Person as Profile } from "@/public/Types/GlobalTypes";


export interface TaskCardProps {
    title: string;
    dueDate: string;
    isComplete: boolean;
    onToggleSubtasks: () => void;
    expandSubtasks: boolean;
    subTasks: SubTask[];
    people: Profile[];
    bucket: string;
    status: string;
    onClick?: () => void;
}

export interface TaskListProps {
  tasks: Task[];
  expandedTaskId: number | null;
  openTaskDetails: (task: Task) => void;
  toggleSubtasks: (id: number) => void;
  selectedTask: Task | null;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export interface SubTaskCardProps {
    subTasks: SubTask[];
    expanded: boolean;
  }

export interface TaskDetailsModalProps {
  task: Task;
  isOpen: boolean;
  close: () => void;
  subtasks: SubTask[];
  people: Profile[];
}

export interface TaskDisplayProps {
  task: Task;
  subTasks: SubTask[];
  profiles: Profile[];
  hoverProfile: Profile | undefined;
  handleMouseEnter: (id: number) => void;
  handleMouseLeave: () => void;
}

export interface ProfileCardProps {
  profilePhoto: string;
  name: string;
  rank: string;
  email: string;
  department: string;
  report_to: string;
}