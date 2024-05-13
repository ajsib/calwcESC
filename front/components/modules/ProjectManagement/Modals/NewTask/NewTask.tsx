/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import Modal from '@/components/Shared/Internal/Modal'; 
import { css } from '@emotion/react';
import peopleData from '@/components/Shared/API/Data/profiles-dummy.json';
import{ Task, SubTask } from '@/components/Shared/Types/types';

const formStyle = css`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #f3f3f3;
`;

const inputStyle = css`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-family: Arial, sans-serif; /* Change font family */
  background-color: #f3f3f3;
  transition: border-color 0.3s ease-in-out;
`;

const selectStyle = css`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-family: Arial, sans-serif; /* Change font family */
  background-color: #f3f3f3;
  transition: border-color 0.3s ease-in-out;
`;

const buttonStyle = css`
  padding: 10px 20px;
  border: none;
  background-color: var(--primary-color);
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

const subTaskContainerStyle = css`
    display: flex; 
    justify-content: 
    space-between; 
    align-items: center;
    gap: 10px;
    button {
        width: 50%;
        height: 100%;
    }
    input {
        width: 50%;
        height: 100%;
    }
`;

interface NewTaskModalProps {
  isOpen: boolean;
  close: () => void;
  addTask: (task: Task) => void;
  teams: string[]; // Array of teams
}

const NewTaskModal: React.FC<NewTaskModalProps> = ({ isOpen, close, addTask, teams }) => {
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

  return (
    <Modal isOpen={isOpen} close={close}>
      <form css={formStyle} onSubmit={handleSubmit}>
        <input
          css={inputStyle}
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        
        <div css={subTaskContainerStyle}>
          <input css={inputStyle} value={subTaskInput} onChange={e => setSubTaskInput(e.target.value)} placeholder="Add SubTask" />
          <button type="button" css={buttonStyle} onClick={handleAddSubTask}>Add SubTask</button>
        </div>

        <select css={selectStyle} value={people.toString()} onChange={handleSelectChange}>
          <option value="">Select People</option>
          {peopleData.map(person => (
            <option key={person.id} value={person.id}>
              {person.name}
            </option>
          ))}
        </select>

        <select css={selectStyle} value={bucket} onChange={e => setBucket(e.target.value)}>
          <option value="">Select Bucket</option>
          {teams.map(team => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
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
