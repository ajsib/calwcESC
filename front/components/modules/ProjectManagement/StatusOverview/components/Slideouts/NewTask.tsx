/** @jsxImportSource @emotion/react */
import Modal from './Slideout';
import { css } from '@emotion/react';
import { NewTaskModalProps } from '../../Types';

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



const NewTaskModal: React.FC<NewTaskModalProps> = ({ isOpen, close, teams, handleSelectChange, handleAddSubTask, handleSubmit, title, subTaskInput, people, bucket, status, dueDate, setTitle, setSubTaskInput, setBucket, setStatus, setDueDate, peopleData }) => {
  

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
            <option key={person.employee_id} value={person.employee_id}>
              {person.name}
            </option>
          ))}
        </select>

        <select css={selectStyle} value={bucket} onChange={e => setBucket(e.target.value)}>
          <option value="">Select Bucket</option>
          {teams.map((team:string) => (
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
