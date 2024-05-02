/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RightWedgeThin from '@/components/UI/arrows/RightWedgeMedium';
import { useState } from 'react';

interface TaskCardProps {
  title: string;
  dueDate: string;
  isComplete: boolean;
  onToggleSubtasks: () => void;
  expandSubtasks: boolean;
  hasSubtasks: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, dueDate, isComplete, onToggleSubtasks, expandSubtasks, hasSubtasks }) => {
  const [hover, setHover] = useState(false); // State to handle hover

  // Calculate the margin-right value based on the hasSubtasks prop
  const marginRightValue = hasSubtasks ? '1rem' : '3rem';

  // Define the avatarStyle with the calculated margin-right value
  const avatarStyle = css`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #ccc;
    margin-right: ${marginRightValue};
  `;

  const taskCardStyle = css`
    border: 1.5px solid #DADADA;
    margin: 1.5rem 0 0.5rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const taskTitleStyle = css`
    flex-grow: 1;
    margin-right: 1rem;
  `;

  const actionButtonsStyle = css`
    display: flex;
    align-items: center;
  `;

  const dropDownButtonStyle = css`
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 2rem;
    padding: 0.5rem;
    transition: background-color 0.3s ease;
    svg {
      transition: transform 0.3s ease, fill 0.3s ease;
    }
    &:hover {
      svg {
        fill: #000; // Changing fill color to black on hover
        transform: rotate(90deg); // Rotating SVG on hover
      }
    }
  `;

  return (
    <div css={taskCardStyle}>
      <div css={taskTitleStyle}>{title}</div>
      <div css={[avatarStyle, { hasSubtasks }]}></div> {/* Pass hasSubtasks as a prop */}
      <div css={actionButtonsStyle}>
        <div>{dueDate}</div>
        {isComplete ? <span>&#10003;</span> : null}
        {hasSubtasks ? (
          <button 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onToggleSubtasks} 
            css={dropDownButtonStyle}>
            <RightWedgeThin size={15} fillColor={hover ? '#000' : '#ccc'} rotation={hover ? 90 : 0}/>
          </button>
        ) : null }
      </div>
    </div>
  );
};

export default TaskCard;

