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
  const [checkedState, setCheckedState] = useState(subTasks.map(subTask => subTask.isChecked || false));

  const handleCheckboxChange = (index: number) => {
    const newCheckedState = [...checkedState];
    newCheckedState[index] = !newCheckedState[index];
    setCheckedState(newCheckedState);
  };

  const subTaskCardStyle = (isLast: boolean) => css`
  border: 1px solid #DADADA;
  margin-left: 2rem; // Increased for better visual nesting
  padding: 1.5rem 2rem; // Increased padding for more space
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f3f3;
  margin-bottom: ${isLast ? '2rem' : '1rem'}; // Increased bottom margin
`;

  const checkboxStyle = css`
    margin-left: 1rem;
  `;

  return (
    <div css={subTaskCardContainerStyle(expanded)}>
      {subTasks.map((subTask, index) => (
        <div key={subTask.id} css={subTaskCardStyle(index === subTasks.length - 1)}>
          <div>{subTask.title}</div>
          <input
            type="checkbox"
            css={checkboxStyle}
            checked={checkedState[index]}
            onChange={() => handleCheckboxChange(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default SubTaskCard;
