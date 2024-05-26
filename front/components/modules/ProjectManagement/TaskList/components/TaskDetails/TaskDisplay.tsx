/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ProfileCard from './ProfileCard';
import { TaskDisplayProps } from '../../Types';

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

const contentStyle = css`
  font-size: 1.2rem;
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



const TaskDisplay = ({ task, onEdit, profiles, hoverProfile, handleMouseEnter, handleMouseLeave } : TaskDisplayProps) => {
  return (
    <>
      <div css={headerStyle}>{task.title}</div>
      <div css={sectionStyle}>
        <label css={labelStyle}>Due Date:</label>
        <span css={contentStyle}>{task.dueDate}</span>
      </div>
      <div css={sectionStyle}>
        <label css={labelStyle}>Status:</label>
        <span css={contentStyle}>{task.status}</span>
      </div>
      <div css={sectionStyle}>
        <label css={labelStyle}>Bucket:</label>
        <span css={contentStyle}>{task.bucket}</span>
      </div>
      <div css={listContainerStyle}>
        <label css={labelStyle}>People:</label>
        <ul css={listStyle}>
        {/* {task.people.map(personId => {
          const personProfile = profiles.find(p => p.id === personId);
          return (
            <li key={personId} css={listItemStyle} onMouseEnter={() => handleMouseEnter(personId)} onMouseLeave={handleMouseLeave}>
              {personProfile?.name}
              {hoverProfile && hoverProfile.id === personId && (
                <ProfileCard {...hoverProfile} />
              )}
            </li>
          );
        })} */}
        </ul>
      </div>
      <div css={listContainerStyle}>
        <label css={labelStyle}>Subtasks:</label>
        <ul css={listStyle}>
          {/* {task.subTasks.map(subTask => (
            <li key={subTask.id} css={listItemStyle}>
              <input type="checkbox" checked={subTask.isChecked} css={checkBoxStyle} readOnly />
              {subTask.title}
            </li>
          ))} */}
        </ul>
      </div>
      <button css={buttonStyle} onClick={onEdit}>Edit Task</button>
    </>
  );
};

export default TaskDisplay;
