/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import Modal from './Modal'; // Assuming Modal is a previously defined component
import { css } from '@emotion/react';
import peopleData from '@/components/Shared/API/Data/profiles-dummy.json';

const formStyle = css`
  display: flex;
  flex-direction: column;
`;

const inputStyle = css`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
`;

const selectStyle = css`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
`;

const buttonStyle = css`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #4287f5;
  color: white;
  cursor: pointer;
`;

interface SubTask {
  id: number;
  title: string;
}

interface Task {
  id: number;
  title: string;
  subTasks: SubTask[];
  people: number[];
  bucket: string;
  status: string;
  dueDate: string;
}

interface NewTaskModalProps {
  isOpen: boolean;
  close: () => void;
  addTask: (task: Task) => void;
}

const NewTaskModal: React.FC<NewTaskModalProps> = ({ isOpen, close, addTask }) => {
  const [title, setTitle] = useState('');
  const [subTasks, setSubTasks] = useState<SubTask[]>([]);
  const [subTaskInput, setSubTaskInput] = useState('');
  const [people, setPeople] = useState<number[]>([]);
  const [bucket, setBucket] = useState('');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddSubTask = () => {
    const newSubTask = { id: Math.floor(Math.random() * 10000), title: subTaskInput };
    setSubTasks([...subTasks, newSubTask]);
    setSubTaskInput('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form from submitting early
    const newTask = {
      id: Math.floor(Math.random() * 10000), // Simulate ID generation
      title,
      subTasks,
      people,
      bucket,
      status,
      dueDate
    };
    addTask(newTask);
    close();
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    if (!people.includes(selectedId)) {
      setPeople([...people, selectedId]); // Add the selected person's ID to the array
    }
  };

  const findPersonById = (id: number) => {
    return peopleData.find(person => person.id === id);
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <form css={formStyle} onSubmit={handleSubmit}>
        <input css={inputStyle} value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        
        <div>
          <input css={inputStyle} value={subTaskInput} onChange={e => setSubTaskInput(e.target.value)} placeholder="Add SubTask" />
          <button type="button" css={buttonStyle} onClick={handleAddSubTask}>Add SubTask</button>
        </div>

        <select css={selectStyle} value={people.toString()} onChange={handleSelectChange}>
          {peopleData.map(person => (
            <option key={person.id} value={person.id}>
              {person.name}
            </option>
          ))}
        </select>

        <select css={selectStyle} value={bucket} onChange={e => setBucket(e.target.value)}>
          <option value="">Select Bucket</option>
          <option value="Marketing Team">Marketing Team</option>
          <option value="Development Team">Development Team</option>
        </select>

        <select css={selectStyle} value={status} onChange={e => setStatus(e.target.value)}>
          <option value="">Select Status</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Overdue">Overdue</option>
        </select>

        <input css={inputStyle} type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
        
        <button type="submit" css={buttonStyle}>Add Task</button>
      </form>
    </Modal>
  );
};

export default NewTaskModal;
