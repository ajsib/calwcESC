/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface TaskCardProps {
  title: string;
  dueDate: string;
  isComplete: boolean;
}

const taskCardStyle = css`
  border: 1px solid #eee;
  margin: 0.5rem 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const taskTitleStyle = css`
  flex-grow: 1;
  margin-right: 1rem;
`;

const avatarStyle = css`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #ccc;
  margin-right: 1rem;
`;

const actionButtonsStyle = css`
  display: flex;
  align-items: center;
`;

const TaskCard: React.FC<TaskCardProps> = ({ title, dueDate, isComplete }) => {
  return (
    <div css={taskCardStyle}>
      <div css={taskTitleStyle}>{title}</div>
      <div css={avatarStyle}></div>
      <div css={actionButtonsStyle}>
        <div>{dueDate}</div> 
        {isComplete ? (
          <span>&#10003;</span> 
        ) : null}
      </div>
    </div>
  );
};

export default TaskCard;
