import { Task, Subtask, Person } from "@/public/Types/GlobalTypes";

export interface StatusCardProps {
    status: string;
    count: number;
    selected: boolean;
    onClick: () => void;
  }

export interface StatusOverviewProps {
    onSelectStatus: (status: string) => void;
    selectedStatus: string | null;
    toDoCount: number;
    inProgressCount: number;
    overdueCount: number;
    completedCount: number;
    onNewTaskModalOpen: () => void;
    onNewTaskModalClose: () => void;
    onManageTeamsModalOpen: () => void;
    onManageTeamsModalClose: () => void;
  }


export interface NewTaskModalProps {
    isOpen: boolean;
    close: () => void;
    teams: any; // Define the proper type if possible
    handleAddSubTask: () => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    title: string;
    subTaskInput: string;
    people: number[];
    bucket: string;
    status: string;
    dueDate: string;
    setTitle: (title: string) => void;
    setSubTaskInput: (input: string) => void;
    setPeople: (people: number[]) => void;
    setBucket: (bucket: string) => void;
    setStatus: (status: string) => void;
    setDueDate: (date: string) => void;
    peopleData: Person[];
    subTasks: Subtask[];
    handleRemoveSubTask: (id: number) => void;
    handlePeopleCheckboxChange: ({ value, checked }: { value: number; checked: boolean }) => void;
    addTask: (task: Task) => void; // Ensure this is included
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Ensure this is included
  }
  

export interface ManageTeamsModalProps {
  isOpen: boolean,
  close: () => void,
  addTeam: (team: string) => void,
  removeTeam: (team: string) => void,
  updateTeams: (teams: string[]) => void,
  newTeam: string,
  setNewTeam: (newTeam: string) => void
  teams: string[],
}