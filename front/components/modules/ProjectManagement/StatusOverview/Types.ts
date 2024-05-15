import { Task, SubTask, Profile } from "../Types";

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
    onNewTaskModalOpen: () => void;
    onNewTaskModalClose: () => void;
    onManageTeamsModalOpen: () => void;
    onManageTeamsModalClose: () => void;
  }


export interface NewTaskModalProps {
    isOpen: boolean;
    close: () => void;
    addTask: (task: Task) => void;
    teams: string[]; // Array of teams
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleAddSubTask: () => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    title: string;
    subTasks: SubTask[];
    people: number[];
    bucket: string;
    status: string;
    dueDate: string;
    setTitle: (title: string) => void;
    setSubTaskInput: (input: string) => void;
    setPeople: (people: number[]) => void;
    setBucket: (bucket: string) => void;
    setStatus: (status: string) => void;
    setDueDate: (dueDate: string) => void;
    subTaskInput: string;
    peopleData: Profile[];
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