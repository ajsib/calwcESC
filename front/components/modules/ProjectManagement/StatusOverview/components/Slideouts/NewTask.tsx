/** @jsxImportSource @emotion/react */
import Modal from '@/components/modules/shared/Modal';
import { css } from '@emotion/react';
import { NewTaskModalProps } from '../../Types';
import { useState } from 'react';

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

const dropdownContainerStyle = css`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const dropdownButtonStyle = css`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  color: #333;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
`;

const dropdownContentStyle = css`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100%;
  border: 1px solid #ddd;
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;

  &.show {
    display: block;
  }
`;

const dropdownItemStyle = css`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const NewTaskModal: React.FC<NewTaskModalProps> = ({
  isOpen,
  close,
  teams,
  handleAddSubTask,
  handleSubmit,
  title,
  subTaskInput,
  people,
  bucket,
  status,
  dueDate,
  setTitle,
  setSubTaskInput,
  setBucket,
  setStatus,
  setDueDate,
  peopleData,
  subTasks,
  handleRemoveSubTask,
  handlePeopleCheckboxChange
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && subTaskInput.trim()) {
      e.preventDefault(); // Prevent form submission
      handleAddSubTask();
    }
  };

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
            <select css={halfInputStyle} value={status} onChange={e => setStatus(e.target.value)}>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
            </select>
          </div>
        </div>

        <div css={subTaskContainerStyle}>
          <div css={css`flex: 1;`}>
            <label css={labelStyle}>Add SubTask</label>
            <div css={css`display: flex; align-items: center;`}>
              <input
                css={subTaskInputStyle}
                value={subTaskInput}
                onChange={e => setSubTaskInput(e.target.value)}
                onKeyDown={handleKeyPress} // Add key press event
              />
              <button type="button" css={subTaskButtonStyle} onClick={handleAddSubTask}>Add</button>
            </div>
          </div>
        </div>

        <div css={inputContainerStyle}>
          <label css={labelStyle}>Select People</label>
          <div css={dropdownContainerStyle}>
            <button type="button" css={dropdownButtonStyle} onClick={toggleDropdown}>
              {people.length > 0 ? `${people.length} People Selected` : 'Select People'}
            </button>
            <div css={[dropdownContentStyle, dropdownOpen && css`display: block;`]}>
              {peopleData.map(person => (
                <div
                  key={person.employee_id}
                  css={dropdownItemStyle}
                  onClick={() => handlePeopleCheckboxChange({ value: person.employee_id, checked: !people.includes(person.employee_id) })}
                >
                  <input
                    type="checkbox"
                    value={person.employee_id}
                    checked={people.includes(person.employee_id)}
                    onChange={() => handlePeopleCheckboxChange({ value: person.employee_id, checked: !people.includes(person.employee_id) })}
                    css={css`margin-right: 10px;`}
                  />
                  {person.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div css={inputContainerStyle}>
          <label css={labelStyle}>Select Team</label>
          <select css={inputStyle} value={bucket} onChange={e => setBucket(e.target.value)}>
            <option value="">Select Team</option>
            {teams.map((team: string) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
        
        <button type="submit" css={[buttonStyle, { padding: '20px 50px', marginTop: '10px'}]}>Create New Task</button>

        <div css={subTaskListStyle}>
          {subTasks.map((subTask) => (
            <div key={subTask.subtask_id} css={subTaskItemStyle}>
              <span>{subTask.title}</span>
              <button type="button" onClick={() => handleRemoveSubTask(subTask.subtask_id)}>✖</button>
            </div>
          ))}
        </div>
      </form>
    </Modal>
  );
};

export default NewTaskModal;
