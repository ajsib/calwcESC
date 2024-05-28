export interface Person {
    employee_id: number;
    image_id: number;
    name: string;
    rank: string;
    department: string;
    last_login: string;
    role: string;
    report_to: string;
    email: string;
}
  
export interface Task {
    task_id: number;
    ticket_id: number;
    title: string;
    bucket: string;
    status: string;
    due_date: string;
    complete: boolean;
}
  
export interface Subtask {
    subtask_id: number;
    task_id: number;
    title: string;
    complete: boolean;
}
  
export interface Ticket {
    ticket_id: number;
    title: string;
    sponsor: string;
    status: string;
    priority: string;
    date: string;
    description_question_set: string;
}
  
export interface TaskPerson {
    task_id: number;
    employee_id: number;
}
  
export interface TicketPerson {
    ticket_id: number;
    employee_id: number;
}
  
export interface File {
    file_id: number;
    employee_id: number;
    ticket_id: number;
    file_name: string;
    file_type: string;
    content: string;
    date_added: string;
    date_modified: string;
}
  
export interface FilePerson {
    file_id: number;
    employee_id: number;
}
  