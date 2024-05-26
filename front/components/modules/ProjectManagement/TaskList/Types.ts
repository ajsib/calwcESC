import { Task, Subtask as SubTask, Person as Profile } from "@/public/Types/GlobalTypes";

export interface TaskListProps {
    tasks: Task[];
    expandedTaskId: number | null;
    openTaskDetails: (task: Task) => void;
    toggleSubtasks: (id: number) => void;
    selectedTask: Task | null;
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void;
  }

export interface SubTaskCardProps {
    subTasks: SubTask[];
    expanded: boolean;
  }

export interface TaskCardProps {
    title: string;
    dueDate: string;
    isComplete: boolean;
    onToggleSubtasks: () => void;
    expandSubtasks: boolean;
    subTasks: null;
    people: null;
    bucket: string;
    status: string;
    onClick?: () => void;
  }

export interface EditFormProps {
  task: Task;
  onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDueDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onStatusChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBucketChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPeopleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveChanges: () => void;
  subTasks: SubTask[];
  onSubTaskChange: (id: number, title: string) => void;
  onDeleteSubTask: (id: number) => void;
}

export interface TaskDetailsModalProps {
  task: Task;
  isOpen: boolean;
  close: () => void;
}

export interface TaskDisplayProps {
  task: Task;
  subTasks: SubTask[];
  profiles: Profile[];
  hoverProfile: Profile | undefined;
  handleMouseEnter: (id: number) => void;
  handleMouseLeave: () => void;
  onEdit: () => void;
}

export interface ProfileCardProps {
  profilePhoto: string;
  name: string;
  rank: string;
  email: string;
  department: string;
  reportsTo: string;
}