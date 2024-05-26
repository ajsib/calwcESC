/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { TaskCardProps } from '../Types';

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  dueDate,
  isComplete,
  subTasks,
  status,
  bucket
}) => {
  const [hover, setHover] = useState(false);
  const [hasSubtasks] = useState(subTasks && subTasks.length > 0);

  const avatarStyle = css`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #ccc;
    margin-left: auto;
  `;

  const taskCardStyle = css`
    border: 1.5px solid #dadada;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    box-sizing: border-box; // Ensures padding and border are included in the element's total width and height
    &:hover:not(:active) {
      transform: ${hover ? "none" : "translateY(-2px)"};
      box-shadow: ${hover ? "none" : "0 4px 6px rgba(0,0,0,0.05)"};
      cursor: pointer;
    }
  `;

  const subTaskCardStyle = css`
    border: 1.5px solid #dadada;
    padding: 1rem 2rem;
    margin-left: 2rem; // Indent to show it's related to the main task
    margin-bottom: 0.5rem;
    width: calc(100% - 2rem); // Adjust width to account for margin
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
  `;

  const statusBorderStyle = css`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${status === 'To Do' ? '#4287f5' : status === 'In Progress' ? 'orange' : '#ad1818'};
  `;

  const statusOverlayStyle = css`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: rgba(0, 0, 0, 0.1);
  `;

  const taskTitleStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
  `;

  const taskInfoStyle = css`
    display: flex;
    flex-direction: column;
  `;

  const bucketStyle = css`
    font-size: 1rem;
    font-weight: normal;
    color: #777;
  `;

  const subTaskStyle = css`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    width: 100%;
  `;

  const checkBoxStyle = css`
    margin-right: 0.5rem;
  `;

  const actionButtonsStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `;

  const dateStyle = css`
    font-size: 1.2rem;
    font-family: PT Serif;
  `;

  return (
    <>
      <div css={taskCardStyle}>
        <div css={statusBorderStyle}></div>
        <div css={statusOverlayStyle}></div>
        <div css={taskTitleStyle}>
          <div css={taskInfoStyle}>
            <h2>{title}</h2>
            <div css={bucketStyle}>{bucket}</div>
          </div>
          <div css={avatarStyle}></div>
        </div>
        <div css={actionButtonsStyle}>
          <div css={dateStyle}>{dueDate}</div>
          {isComplete ? <span>&#10003;</span> : null}
        </div>
      </div>
      {hasSubtasks && subTasks.map(subTask => (
        <div key={subTask.subtask_id} css={subTaskCardStyle}>
          <div css={subTaskStyle}>
            <input type="checkbox" checked={subTask.complete} css={checkBoxStyle} readOnly />
            <div>{subTask.title}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TaskCard;
