/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { TaskDisplayProps } from '../../Types';
import ProfileCard from './ProfileCard';
import { useProjectManagement } from '../../../ProjectManagementContext';

const headerStyle = css`
  font-size: 2rem;
  margin-bottom: 2rem; /* Increased bottom margin */
`;

const sectionStyle = css`
  margin-bottom: 2rem; 
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

const labelStyle = css`
  font-weight: bold;
  font-size: 1.2rem;
  display: block; /* Make label block to push content down */
`;

const inputStyle = css`
  font-size: 1.2rem;
  padding: 0.5rem;
`;

const selectStyle = css`
  font-size: 1.2rem;
  padding: 0.5rem;
`;

const listContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const listStyle = css`
  margin: 0.5rem 0.5rem 0.5rem 1.5rem;
  font-size: 1.2rem;
`;

const listItemStyle = css`
  display: flex;
  align-items: center;
  &:last-child {
      margin-bottom: 1rem;
  }
`;

const checkBoxStyle = css`
  margin-right: 0.5rem; /* Space between checkbox and subtask title */
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

const TaskDisplay = ({ task, profiles, hoverProfile, handleMouseEnter, handleMouseLeave, subTasks } : TaskDisplayProps) => {
  const [dueDate, setDueDate] = useState(task.due_date);
  const [status, setStatus] = useState(task.status);
  const [bucket, setBucket] = useState(task.bucket);
  const { teams } = useProjectManagement();
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  return (
    <>
      <div css={headerStyle}>{task.title}</div>
      <div css={sectionStyle}>
        <label css={labelStyle}>Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          css={inputStyle}
        />
      </div>
      <div css={sectionStyle}>
        <label css={labelStyle}>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} css={selectStyle}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Complete">Complete</option>
          <option value="Archive">Archive</option>
        </select>
      </div>
      <div css={sectionStyle}>
        <label css={labelStyle}>Bucket:</label>
        <select value={bucket} onChange={(e) => setBucket(e.target.value)} css={selectStyle}>
          {teams.map((bucketOption:string) => (
            <option key={bucketOption} value={bucketOption}>
              {bucketOption}
            </option>
          ))}
        </select>
      </div>
      <div css={listContainerStyle}>
        <label css={labelStyle}>People:</label>
        <ul css={listStyle}>
          {profiles.map(person => {
            const personProfile = profiles.find(p => p.employee_id === person.employee_id);
            return (
              <li key={person.employee_id} css={listItemStyle} onMouseEnter={() => handleMouseEnter(person.employee_id)} onMouseLeave={handleMouseLeave}>
                {personProfile?.name}
                {hoverProfile && hoverProfile.employee_id === person.employee_id && (
                  <ProfileCard {...hoverProfile} profilePhoto={`${backendUrl}api/images/internal/avatar.png`} />
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div css={listContainerStyle}>
        <label css={labelStyle}>Subtasks:</label>
        <ul css={listStyle}>
          {subTasks.map(subTask => (
            <li key={subTask.subtask_id} css={listItemStyle}>
              <input type="checkbox" checked={subTask.complete} css={checkBoxStyle} readOnly />
              {subTask.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskDisplay;
