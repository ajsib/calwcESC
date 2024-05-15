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

export interface Profile {
    id: number;
    name: string;
    profilePhoto: string;
    rank: string;
    email: string;
    department: string;
    reportsTo: string;
  }

export interface File {
  fileName: string;
  fileType: string;
  creator: string;
  dateAdded: string;
  dateModified: string;
}
  