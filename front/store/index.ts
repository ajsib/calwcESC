import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Files from '@/public/Database/Files.json';
import People from '@/public/Database/People.json';
import Files_People from '@/public/Database/Files-People.json';
import Tasks from '@/public/Database/Tasks.json';
import Subtasks from '@/public/Database/Subtasks.json';
import Tasks_People from '@/public/Database/Tasks-People.json';
import Tickets from '@/public/Database/Tickets.json';
import Tickets_People from '@/public/Database/Tickets-People.json';

type File = typeof Files.Files[0];
type Person = typeof People.People[0];
type FilePerson = typeof Files_People.Files_People[0];
type Task = typeof Tasks.Tasks[0];
type Subtask = typeof Subtasks.Subtasks[0];
type TaskPerson = typeof Tasks_People.Tasks_People[0];
type Ticket = typeof Tickets.Tickets[0];
type TicketPerson = typeof Tickets_People.Tickets_People[0];

interface State {
  Files: File[];
  People: Person[];
  Files_People: FilePerson[];
  Tasks: Task[];
  Subtasks: Subtask[];
  Tasks_People: TaskPerson[];
  Tickets: Ticket[];
  Tickets_People: TicketPerson[];
}

const initialState: State = {
  Files: Files.Files,
  People: People.People,
  Files_People: Files_People.Files_People,
  Tasks: Tasks.Tasks,
  Subtasks: Subtasks.Subtasks,
  Tasks_People: Tasks_People.Tasks_People,
  Tickets: Tickets.Tickets,
  Tickets_People: Tickets_People.Tickets_People,
};

const slice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setFiles: (state, action: PayloadAction<File[]>) => {
      state.Files = action.payload;
    },
    addFile: (state, action: PayloadAction<File>) => {
      state.Files.push(action.payload);
    },
    updateFile: (state, action: PayloadAction<File>) => {
      const index = state.Files.findIndex(file => file.file_id === action.payload.file_id);
      if (index !== -1) {
        state.Files[index] = action.payload;
      }
    },
    deleteFile: (state, action: PayloadAction<number>) => {
      state.Files = state.Files.filter(file => file.file_id !== action.payload);
    },
    setPeople: (state, action: PayloadAction<Person[]>) => {
      state.People = action.payload;
    },
    addPerson: (state, action: PayloadAction<Person>) => {
      state.People.push(action.payload);
    },
    updatePerson: (state, action: PayloadAction<Person>) => {
      const index = state.People.findIndex(person => person.employee_id === action.payload.employee_id);
      if (index !== -1) {
        state.People[index] = action.payload;
      }
    },
    deletePerson: (state, action: PayloadAction<number>) => {
      state.People = state.People.filter(person => person.employee_id !== action.payload);
    },
    setFilesPeople: (state, action: PayloadAction<FilePerson[]>) => {
      state.Files_People = action.payload;
    },
    addFilePerson: (state, action: PayloadAction<FilePerson>) => {
      state.Files_People.push(action.payload);
    },
    updateFilePerson: (state, action: PayloadAction<FilePerson>) => {
      const index = state.Files_People.findIndex(fp => fp.employee_id === action.payload.employee_id);
      if (index !== -1) {
        state.Files_People[index] = action.payload;
      }
    },
    deleteFilePerson: (state, action: PayloadAction<number>) => {
      state.Files_People = state.Files_People.filter(fp => fp.employee_id !== action.payload);
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.Tasks = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.Tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.Tasks.findIndex(task => task.task_id === action.payload.task_id);
      if (index !== -1) {
        state.Tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.Tasks = state.Tasks.filter(task => task.task_id !== action.payload);
    },
    setSubtasks: (state, action: PayloadAction<Subtask[]>) => {
      state.Subtasks = action.payload;
    },
    addSubtask: (state, action: PayloadAction<Subtask>) => {
      state.Subtasks.push(action.payload);
    },
    updateSubtask: (state, action: PayloadAction<Subtask>) => {
      const index = state.Subtasks.findIndex(subtask => subtask.subtask_id === action.payload.subtask_id);
      if (index !== -1) {
        state.Subtasks[index] = action.payload;
      }
    },
    deleteSubtask: (state, action: PayloadAction<number>) => {
      state.Subtasks = state.Subtasks.filter(subtask => subtask.subtask_id !== action.payload);
    },
    setTasksPeople: (state, action: PayloadAction<TaskPerson[]>) => {
      state.Tasks_People = action.payload;
    },
    addTaskPerson: (state, action: PayloadAction<TaskPerson>) => {
      state.Tasks_People.push(action.payload);
    },
    updateTaskPerson: (state, action: PayloadAction<TaskPerson>) => {
      const index = state.Tasks_People.findIndex(tp => tp.employee_id === action.payload.employee_id);
      if (index !== -1) {
        state.Tasks_People[index] = action.payload;
      }
    },
    deleteTaskPerson: (state, action: PayloadAction<number>) => {
      state.Tasks_People = state.Tasks_People.filter(tp => tp.employee_id !== action.payload);
    },
    setTickets: (state, action: PayloadAction<Ticket[]>) => {
      state.Tickets = action.payload;
    },
    addTicket: (state, action: PayloadAction<Ticket>) => {
      state.Tickets.push(action.payload);
    },
    updateTicket: (state, action: PayloadAction<Ticket>) => {
      const index = state.Tickets.findIndex(ticket => ticket.ticket_id === action.payload.ticket_id);
      if (index !== -1) {
        state.Tickets[index] = action.payload;
      }
    },
    deleteTicket: (state, action: PayloadAction<number>) => {
      state.Tickets = state.Tickets.filter(ticket => ticket.ticket_id !== action.payload);
    },
    setTicketsPeople: (state, action: PayloadAction<TicketPerson[]>) => {
      state.Tickets_People = action.payload;
    },
    addTicketPerson: (state, action: PayloadAction<TicketPerson>) => {
      state.Tickets_People.push(action.payload);
    },
    updateTicketPerson: (state, action: PayloadAction<TicketPerson>) => {
      const index = state.Tickets_People.findIndex(tp => tp.employee_id === action.payload.employee_id);
      if (index !== -1) {
        state.Tickets_People[index] = action.payload;
      }
    },
    deleteTicketPerson: (state, action: PayloadAction<number>) => {
      state.Tickets_People = state.Tickets_People.filter(tp => tp.employee_id !== action.payload);
    },
  },
});

export const {
  setFiles,
  addFile,
  updateFile,
  deleteFile,
  setPeople,
  addPerson,
  updatePerson,
  deletePerson,
  setFilesPeople,
  addFilePerson,
  updateFilePerson,
  deleteFilePerson,
  setTasks,
  addTask,
  updateTask,
  deleteTask,
  setSubtasks,
  addSubtask,
  updateSubtask,
  deleteSubtask,
  setTasksPeople,
  addTaskPerson,
  updateTaskPerson,
  deleteTaskPerson,
  setTickets,
  addTicket,
  updateTicket,
  deleteTicket,
  setTicketsPeople,
  addTicketPerson,
  updateTicketPerson,
  deleteTicketPerson,
} = slice.actions;

const store = configureStore({
  reducer: slice.reducer,
});

export default store;
