import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import store, {
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
} from '@/store/index';

const mock = new MockAdapter(axios);

// Files routes
mock.onGet('/api/files').reply(() => {
  return [200, store.getState().Files];
});

mock.onPost('/api/files').reply(config => {
  const newFile = JSON.parse(config.data);
  store.dispatch(addFile(newFile));
  return [201, newFile];
});

mock.onPut('/api/files/:id').reply(config => {
  const id = parseInt(config.params.id);
  const updatedFile = JSON.parse(config.data);
  store.dispatch(updateFile({ ...updatedFile, file_id: id }));
  return [200, updatedFile];
});

mock.onDelete('/api/files/:id').reply(config => {
  const id = parseInt(config.params.id);
  store.dispatch(deleteFile(id));
  return [204];
});

// People routes
mock.onGet('/api/people').reply((config) => {
  if(config.params === undefined || config.params.id === undefined) {
  return [200, store.getState().People];
  } else {
    const id = parseInt(config.params.id);
    console.log("id", id);
    const person = store.getState().People.find(p => p.employee_id === id);
    if (person) {
      return [200, person];
    } else {
      return [404, { message: 'Person not found' }];
    }
  }
});

mock.onPost('/api/people').reply(config => {
  const newPerson = JSON.parse(config.data);
  store.dispatch(addPerson(newPerson));
  return [201, newPerson];
});

mock.onPut('/api/people/:id').reply(config => {
  const id = parseInt(config.params.id);
  const updatedPerson = JSON.parse(config.data);
  store.dispatch(updatePerson({ ...updatedPerson, employee_id: id }));
  return [200, updatedPerson];
});

mock.onDelete('/api/people/:id').reply(config => {
  const id = parseInt(config.params.id);
  store.dispatch(deletePerson(id));
  return [204];
});

// Files_People routes
mock.onGet('/api/files_people').reply(() => {
  return [200, store.getState().Files_People];
});

mock.onPost('/api/files_people').reply(config => {
  const newFilePerson = JSON.parse(config.data);
  store.dispatch(addFilePerson(newFilePerson));
  return [201, newFilePerson];
});

mock.onPut('/api/files_people/:id').reply(config => {
  const id = parseInt(config.params.id);
  const updatedFilePerson = JSON.parse(config.data);
  store.dispatch(updateFilePerson({ ...updatedFilePerson, id }));
  return [200, updatedFilePerson];
});

mock.onDelete('/api/files_people/:id').reply(config => {
  const id = parseInt(config.params.id);
  store.dispatch(deleteFilePerson(id));
  return [204];
});

// Tasks routes
mock.onGet('/api/tasks').reply(() => {
  return [200, store.getState().Tasks];
});

mock.onPost('/api/tasks').reply(config => {
  const newTask = JSON.parse(config.data);
  store.dispatch(addTask(newTask));
  return [201, newTask];
});

mock.onPut('/api/tasks/:id').reply(config => {
  const id = parseInt(config.params.id);
  const updatedTask = JSON.parse(config.data);
  store.dispatch(updateTask({ ...updatedTask, task_id: id }));
  return [200, updatedTask];
});

mock.onDelete('/api/tasks/:id').reply(config => {
  const id = parseInt(config.params.id);
  store.dispatch(deleteTask(id));
  return [204];
});

// Subtasks routes
mock.onGet('/api/subtasks').reply(() => {
  return [200, store.getState().Subtasks];
});

mock.onPost('/api/subtasks').reply(config => {
  const newSubtask = JSON.parse(config.data);
  store.dispatch(addSubtask(newSubtask));
  return [201, newSubtask];
});

mock.onPut('/api/subtasks/:id').reply(config => {
  const id = parseInt(config.params.id);
  const updatedSubtask = JSON.parse(config.data);
  store.dispatch(updateSubtask({ ...updatedSubtask, subtask_id: id }));
  return [200, updatedSubtask];
});

mock.onDelete('/api/subtasks/:id').reply(config => {
  const id = parseInt(config.params.id);
  store.dispatch(deleteSubtask(id));
  return [204];
});

// Tasks_People routes
mock.onGet('/api/tasks_people').reply(() => {
  return [200, store.getState().Tasks_People];
});

mock.onPost('/api/tasks_people').reply(config => {
  const newTaskPerson = JSON.parse(config.data);
  store.dispatch(addTaskPerson(newTaskPerson));
  return [201, newTaskPerson];
});

mock.onPut('/api/tasks_people/:id').reply(config => {
  const id = parseInt(config.params.id);
  const updatedTaskPerson = JSON.parse(config.data);
  store.dispatch(updateTaskPerson({ ...updatedTaskPerson, id }));
  return [200, updatedTaskPerson];
});

mock.onDelete('/api/tasks_people/:id').reply(config => {
  const id = parseInt(config.params.id);
  store.dispatch(deleteTaskPerson(id));
  return [204];
});

// Tickets routes
mock.onGet('/api/tickets').reply(() => {
  return [200, store.getState().Tickets];
});

mock.onPost('/api/tickets').reply(config => {
  const newTicket = JSON.parse(config.data);
  store.dispatch(addTicket(newTicket));
  return [201, newTicket];
});

mock.onPut('/api/tickets/:id').reply(config => {
  const id = parseInt(config.params.id);
  const updatedTicket = JSON.parse(config.data);
  store.dispatch(updateTicket({ ...updatedTicket, ticket_id: id }));
  return [200, updatedTicket];
});

mock.onDelete('/api/tickets/:id').reply(config => {
  const id = parseInt(config.params.id);
  store.dispatch(deleteTicket(id));
  return [204];
});

// Tickets_People routes
mock.onGet('/api/tickets_people').reply(() => {
  return [200, store.getState().Tickets_People];
});

mock.onPost('/api/tickets_people').reply(config => {
  const newTicketPerson = JSON.parse(config.data);
  store.dispatch(addTicketPerson(newTicketPerson));
  return [201, newTicketPerson];
});

mock.onPut('/api/tickets_people/:id').reply(config => {
  const id = parseInt(config.params.id);
  const updatedTicketPerson = JSON.parse(config.data);
  store.dispatch(updateTicketPerson({ ...updatedTicketPerson, id }));
  return [200, updatedTicketPerson];
});

mock.onDelete('/api/tickets_people/:id').reply(config => {
  const id = parseInt(config.params.id);
  store.dispatch(deleteTicketPerson(id));
  return [204];
});
