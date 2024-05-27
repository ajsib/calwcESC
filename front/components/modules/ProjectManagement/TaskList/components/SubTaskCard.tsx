/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { useState } from 'react';
import { SubTaskCardProps } from '../Types';

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
  const [checkedState, setCheckedState] = useState(subTasks.map(subTask => subTask.complete || false));

  const handleCheckboxChange = (index: number) => {
    const newCheckedState = [...checkedState];
    newCheckedState[index] = !newCheckedState[index];
    setCheckedState(newCheckedState);
  };

  const subTaskCardStyle = (isLast: boolean) => css`
    border: 1px solid #DADADA;
    margin-left: 2rem;
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(243, 243, 243, 0.34);
    margin-bottom: ${isLast ? '2rem' : '1rem'};
  `;

  const checkboxStyle = css`
    position: relative;
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    background-color: transparent;
    border: 2px solid #4b5320; // Military green color
    border-radius: 3px;
    cursor: pointer;

    &:checked {
      background-color: #4f8c40; // Dark green background when checked
      border-color: #4f8c40;
    }

    &:checked::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 6px;
      width: 6px;
      height: 12px;
      border: solid #f3f3f3;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  `;

  return (
    <div css={subTaskCardContainerStyle(expanded)}>
      {subTasks.map((subTask, index) => (
        <div key={subTask.subtask_id} css={subTaskCardStyle(index === subTasks.length - 1)}>
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
