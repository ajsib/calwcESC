import axios from 'axios';
import { Task, Person, Subtask, TaskPerson, TicketPerson } from '@/public/Types/GlobalTypes';

// Existing functions
export const fetchTaskData = async (): Promise<Task[]> => {
  try {
    const { data: tasks } = await axios.get<Task[]>('/api/tasks');
    const { data: subtasks } = await axios.get<Subtask[]>('/api/subtasks');
    const { data: tasksPeople } = await axios.get<TaskPerson[]>('/api/tasks_people');
    const { data: people } = await axios.get<Person[]>('/api/people');

    const enrichedTasks = tasks.map(task => ({
      ...task,
      subTasks: subtasks.filter(subtask => subtask.task_id === task.task_id),
      people: tasksPeople
        .filter(tp => tp.task_id === task.task_id)
        .map(tp => people.find(person => person.employee_id === tp.employee_id))
        .filter((person): person is Person => person !== undefined)
    }));
    
    return enrichedTasks;
  } catch (error) {
    console.error('Error fetching task data:', error);
    throw error;
  }
};

export const fetchPeopleData = async (): Promise<Person[]> => {
  try {
    const { data: people } = await axios.get<Person[]>('/api/people');
    return people;
  } catch (error) {
    console.error('Error fetching people data:', error);
    throw error;
  }
};

export const fetchSubtasksByTaskId = async (taskId: number): Promise<Subtask[]> => {
  try {
    const { data: subtasks } = await axios.get<Subtask[]>('/api/subtasks');
    return subtasks.filter(subtask => subtask.task_id === taskId);
  } catch (error) {
    console.error('Error fetching subtasks data:', error);
    throw error;
  }
};

export const fetchPeopleAssignedToTask = async (taskId: number): Promise<Person[]> => {
  try {
    const { data: tasksPeople } = await axios.get<TaskPerson[]>('/api/tasks_people');
    const { data: people } = await axios.get<Person[]>('/api/people');

    const assignedPeople = tasksPeople
      .filter(tp => tp.task_id === taskId)
      .map(tp => people.find(person => person.employee_id === tp.employee_id))
      .filter((person): person is Person => person !== undefined);

    return assignedPeople;
  } catch (error) {
    console.error('Error fetching people assigned to task:', error);
    throw error;
  }
};

export const fetchTasksAssignedToUser = async (employeeId: number): Promise<Task[]> => {
  try {
    const { data: tasksPeople } = await axios.get<TaskPerson[]>('/api/tasks_people');
    const { data: ticketsPeople } = await axios.get<TicketPerson[]>('/api/tickets_people');
    const { data: tasks } = await axios.get<Task[]>('/api/tasks');
    const { data: people } = await axios.get<Person[]>('/api/people');
    const { data: subtasks } = await axios.get<Subtask[]>('/api/subtasks');

    // Tasks directly assigned to the user
    const directTaskIds = tasksPeople
      .filter(tp => tp.employee_id === employeeId)
      .map(tp => tp.task_id);

    // Tickets assigned to the user
    const ticketIds = ticketsPeople
      .filter(tp => tp.employee_id === employeeId)
      .map(tp => tp.ticket_id);

    // Tasks associated with those tickets
    const ticketTaskIds = tasks
      .filter(task => task.ticket_id && ticketIds.includes(task.ticket_id))
      .map(task => task.task_id);

    // Combine and deduplicate task IDs
    const allTaskIds = Array.from(new Set([...directTaskIds, ...ticketTaskIds]));

    // Fetch tasks based on combined task IDs
    const userTasks = tasks.filter(task => allTaskIds.includes(task.task_id)).map(task => ({
      ...task,
      subTasks: subtasks.filter(subtask => subtask.task_id === task.task_id),
      people: tasksPeople
        .filter(tp => tp.task_id === task.task_id)
        .map(tp => people.find(person => person.employee_id === tp.employee_id))
        .filter((person): person is Person => person !== undefined)
    }));

    return userTasks;
  } catch (error) {
    console.error('Error fetching tasks assigned to user:', error);
    throw error;
  }
};

// New functions
export const addNewTask = async (task: Task): Promise<Task> => {
  try {
    const { data: newTask } = await axios.post('/api/tasks', task);
    return newTask;
  } catch (error) {
    console.error('Error adding new task:', error);
    throw error;
  }
};

export const addNewSubtask = async (subtask: Subtask): Promise<Subtask> => {
  try {
    const { data: newSubtask } = await axios.post('/api/subtasks', subtask);
    return newSubtask;
  } catch (error) {
    console.error('Error adding new subtask:', error);
    throw error;
  }
};

export const addNewTaskPerson = async (taskPerson: TaskPerson): Promise<TaskPerson> => {
  try {
    const { data: newTaskPerson } = await axios.post('/api/tasks_people', taskPerson);
    return newTaskPerson;
  } catch (error) {
    console.error('Error adding new task person:', error);
    throw error;
  }
};

export const fetchPersonById = async (employeeId: number): Promise<Person | null> => {
  try {
    const { data: person } = await axios.get<Person>(`/api/people`, { params: { id: employeeId } });
    console.log("Person:", person);
    return person || null;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 404) {
        console.error('Person not found:', error.response.data.message);
        return null;
      } else {
        console.error('Error response:', error.response ? error.response.data : error.message);
      }
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};

