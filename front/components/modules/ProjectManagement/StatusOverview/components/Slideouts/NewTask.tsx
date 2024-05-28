/** @jsxImportSource @emotion/react */
import Modal from './Slideout';
import { css } from '@emotion/react';
import { NewTaskModalProps } from '../../Types';

const formStyle = css`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const inputContainerStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;

const labelStyle = css`
  margin-bottom: 5px;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  color: #333;
`;

const inputStyle = css`
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  background-color: #fff;
  transition: border-color 0.3s ease-in-out;
`;

const halfInputStyle = css`
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  background-color: #fff;
  transition: border-color 0.3s ease-in-out;
`;

const buttonStyle = css`
  padding: 10px 20px;
  border: none;
  background-color: #364132;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #2b332a;
  }
`;

const subTaskContainerStyle = css`
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  margin: 10px 0;
  width: 100%;
`;

const subTaskInputStyle = css`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  background-color: #fff;
  transition: border-color 0.3s ease-in-out;
  height: 100%;
`;

const subTaskButtonStyle = css`
  padding: 10px 50px; 
  border: none;
  background-color: #364132;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  height: 100%;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #2b332a;
  }
`;

const subTaskListStyle = css`
  display: flex; 
  flex-direction: column; 
  margin-top: 10px;
`;

const subTaskItemStyle = css`
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  padding: 10px;
  background-color: #fafafa; /* Changed to off-white */
  margin-bottom: 5px;
  button {
    border: none;
    font-size: 1rem;
    transition: background-color 0.3s ease-in-out;
    padding: 5px;
    &:hover {
      cursor: pointer;
      background-color: #eaeaea;
    }
  }
`;

const NewTaskModal: React.FC<NewTaskModalProps> = ({ isOpen, close, teams, handleSelectChange, handleAddSubTask, handleSubmit, title, subTaskInput, people, bucket, status, dueDate, setTitle, setSubTaskInput, setBucket, setStatus, setDueDate, peopleData, subTasks, handleRemoveSubTask }) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <div css={css`background-color: transparent; padding: 10px; display: flex; justify-content: space-between;`}>
        <h2>Create New Task</h2>
        <button onClick={close} css={css`background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer;`}>✖</button>
      </div>
      <form css={formStyle} onSubmit={handleSubmit}>
        <div css={inputContainerStyle}>
          <label css={labelStyle}>Title</label>
          <input
            css={inputStyle}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        
        <div css={css`display: flex; width: 100%; gap: 1rem;`}>
          <div css={inputContainerStyle}>
            <label css={labelStyle}>Due Date</label>
            <input css={halfInputStyle} type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
          </div>
          <div css={inputContainerStyle}>
            <label css={labelStyle}>Status</label>
            <input css={halfInputStyle} value={status} onChange={e => setStatus(e.target.value)} />
          </div>
        </div>

        <div css={subTaskContainerStyle}>
          <div css={css`flex: 1;`}>
            <label css={labelStyle}>Add SubTask</label>
            <div css={css`display: flex; align-items: center;`}>
              <input css={subTaskInputStyle} value={subTaskInput} onChange={e => setSubTaskInput(e.target.value)} />
              <button type="button" css={subTaskButtonStyle} onClick={handleAddSubTask}>Add</button>
            </div>
          </div>
        </div>

        <div css={inputContainerStyle}>
          <label css={labelStyle}>Select People</label>
          <select css={inputStyle} value={people.toString()} onChange={handleSelectChange}>
            <option value="">Select People</option>
            {peopleData.map(person => (
              <option key={person.employee_id} value={person.employee_id}>
                {person.name}
              </option>
            ))}
          </select>
        </div>

        <div css={inputContainerStyle}>
          <label css={labelStyle}>Select Team</label>
          <select css={inputStyle} value={bucket} onChange={e => setBucket(e.target.value)}>
            <option value="">Select Team</option>
            {teams.map((team:string) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
        
        <button type="submit" css={buttonStyle}>Create New Task</button>

        <div css={subTaskListStyle}>
          {subTasks.map((subTask, index) => (
            <div key={index} css={subTaskItemStyle}>
              <span>{subTask.title}</span>
              <button type="button" onClick={() => handleRemoveSubTask(index)}>✖</button>
            </div>
          ))}
        </div>
      </form>
    </Modal>
  );
};

export default NewTaskModal;
