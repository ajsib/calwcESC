/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { useState, useEffect } from 'react';

interface SubTask {
  id: number;
  title: string;
  isChecked?: boolean;
}

interface SubTaskCardProps {
  subTasks: SubTask[];
  expanded: boolean;
}

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px;
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    max-height: 500px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;

const subTaskCardContainerStyle = (expanded: boolean) => css`
  overflow: hidden;
  animation: ${expanded ? slideDown : slideUp} 0.5s ease forwards;
`;

const SubTaskCard: React.FC<SubTaskCardProps> = ({ subTasks, expanded }) => {
  useEffect(() => {
    console.log("SubTaskCard animation triggered: ", expanded);
  }, [expanded]);

  const subTaskCardStyle = css`
    border: 1px solid #DADADA;
    margin: 0.5rem 0 0.5rem 2rem;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
  `;

  const checkboxStyle = css`
    margin-left: 1rem;
  `;

  return (
    <div css={subTaskCardContainerStyle(expanded)}>
      {subTasks.map((subTask) => (
        <div key={subTask.id} css={subTaskCardStyle}>
          <div>{subTask.title}</div>
          <input
            type="checkbox"
            css={checkboxStyle}
            checked={subTask.isChecked || false}
            onChange={() => {}}
          />
        </div>
      ))}
    </div>
  );
};

export default SubTaskCard;
