export interface Ticket {
    id: string;
    title: string;
    status: string;
    priority: string;
    date: string;
    assignedTo: string;
    description: string;
  }

export interface SubTask {
  id: number;
  title: string;
  isChecked?: boolean;
}
export interface Task {
  id: number;
  title: string;
  subTasks: SubTask[];
  people: number[];
  bucket: string;
  status: string;
  dueDate: string;
}

export interface File {
    fileName: string;
    fileType: string;
    creator: string;
    dateAdded: string;
    dateModified: string;
  }

export interface CardDisplayProps {
  ticketsData: Ticket[];
  filesData: File[];
  tasksData: Task[];
  selectedTab: string;
}

export interface Teammember {
  id?: number;
  name?: string;
  profilePhoto?: string;
  rank?: string;
  email?: string;
  department?: string;
  reportsTo?: string;
}