/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { EditFormProps } from '../../Types';

const inputStyle = css`
  padding: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem;
`;

const labelStyle = css`
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const buttonStyle = css`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border: none;
  background-color: var(--primary-color);
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
`;

const listItemStyle = css`
  display: flex;
  align-items: center;
  width: 80%;
`;


const TaskEditForm = ({ task, onTitleChange, onDueDateChange, onStatusChange, onBucketChange, onPeopleChange, subTasks, onDeleteSubTask, onSubTaskChange, onSaveChanges }: EditFormProps) => {
  return (
    <>
      <div css={labelStyle}>Title:</div>
      <input css={inputStyle} value={task.title} onChange={onTitleChange} />

      <div css={labelStyle}>Due Date:</div>
      <input type="date" css={inputStyle} value={task.dueDate} onChange={onDueDateChange} />

      <div css={labelStyle}>Status:</div>
      <select css={inputStyle} value={task.status} onChange={onStatusChange}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Complete">Complete</option>
      </select>

      <div css={labelStyle}>Bucket:</div>
      <input css={inputStyle} value={task.bucket} onChange={onBucketChange} />

      <div css={labelStyle}>People:</div>
      <input css={inputStyle} value={task.people.join(', ')} onChange={onPeopleChange} />

      <div>
        <label css={labelStyle}>Subtasks:</label>
        <ul>
          {subTasks.map(subTask => (
            <li key={subTask.id} css={listItemStyle}>
              <input
                css={inputStyle}
                type='text'
                value={subTask.title}
                onChange={(e) => onSubTaskChange(subTask.id, e.target.value)}
                style={{ width: 'calc(100% - 100px)' }}
              />
              <button css={buttonStyle} onClick={() => onDeleteSubTask(subTask.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <button css={buttonStyle} onClick={onSaveChanges}>Save Changes</button>
    </>
  );
};

export default TaskEditForm;
