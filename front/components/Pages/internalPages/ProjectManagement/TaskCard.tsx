/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RightWedgeThin from '@/components/UI/arrows/RightWedgeMedium';
import { useState } from 'react';

interface SubTask {
  id: number;
  title: string;
  isChecked?: boolean;
}

interface TaskCardProps {
  title: string;
  dueDate: string;
  isComplete: boolean;
  onToggleSubtasks: () => void;
  expandSubtasks: boolean;
  subTasks: SubTask[];
  people: Number[];
  bucket: string;
  status: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, dueDate, isComplete, onToggleSubtasks, expandSubtasks, subTasks, people, bucket, status }) => {
  const [hover, setHover] = useState(false); // State to handle hover
  const [dropdownActive, setDropdownActive] = useState(false); // State to track dropdown activation
  const [hasSubtasks, setHasSubtasks] = useState(subTasks.length > 0); // State to track subtasks

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
  padding: 2rem; // Increased from 1rem for more internal space
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${dropdownActive ? '1rem' : '1.5rem'}; // Increased spacing
  position: relative;
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
    background-color: rgba(0, 0, 0, 0.1); // Grey overlay color with opacity
  `;

  const taskTitleStyle = css`
    display: flex;
    gap: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    align-items: center;
    flex-grow: 1;
    margin-left: 0.5rem; // Adjust margin for space between border and text
    position: relative; /* Position relative for absolute positioning of status circle */
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
    padding: 0.5rem;
    margin-left: 0.5rem;
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

  const dateStyle = css`
    margin-right: 0.5rem;
    font-size: 1.2rem;
    font-family: PT Serif;
  `;

  return (
    <div css={taskCardStyle}>
      <div css={statusBorderStyle}></div>
      <div css={statusOverlayStyle}></div>
      <div css={taskTitleStyle}>
        {title}
      </div>
      <div css={[avatarStyle, { hasSubtasks }]}></div> {/* Pass hasSubtasks as a prop */}
      <div css={actionButtonsStyle}>
        <div css={dateStyle}>{dueDate}</div>
        {isComplete ? <span>&#10003;</span> : null}
        {hasSubtasks ? (
          <button 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => {
              setDropdownActive(!dropdownActive); // Toggle dropdown activation
              onToggleSubtasks(); // Call the provided toggle function
            }} 
            css={dropDownButtonStyle}>
            <RightWedgeThin size={20} rotation={hover ? 90 : dropdownActive ? 90 : 0} fillColor={hover ? '#777' : dropdownActive ? '#777' : '#bbb'} />
          </button>
        ) : null }
      </div>
    </div>
  );
};

export default TaskCard;
