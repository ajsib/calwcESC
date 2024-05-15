/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RightWedgeThin from '@/components/UI/arrows/RightWedgeMedium';
import { useState, useEffect } from 'react';
import { TaskCardProps } from '../Types';


const TaskCard: React.FC<TaskCardProps> = ({
  title,
  dueDate,
  isComplete,
  onToggleSubtasks,
  expandSubtasks,
  subTasks,
  status,
  onClick,
}) => {
  const [hover, setHover] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [hasSubtasks, setHasSubtasks] = useState(subTasks.length > 0);
  useEffect(() => {
    setDropdownActive(expandSubtasks);
  }, [expandSubtasks]);

  const handleToggleSubtasks = () => {
    setDropdownActive(!dropdownActive);
    onToggleSubtasks();
  };

  const marginRightValue = hasSubtasks ? '1rem' : '3rem';

  const avatarStyle = css`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #ccc;
    margin-right: ${marginRightValue};
  `;

  const taskCardStyle = css`
    border: 1.5px solid #dadada;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${dropdownActive ? '1rem' : '1.5rem'};
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease; // Added transition
    &:hover:not(:active) { // Exclude hover effect when the button is being clicked
      transform: ${hover ? "none" : "translateY(-2px)"};
      box-shadow: ${hover ? "none" : "0 4px 6px rgba(0,0,0,0.05)"};
      cursor: pointer;
    }
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
    gap: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    align-items: center;
    flex-grow: 1;
    margin-left: 0.5rem;
    position: relative;
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
    cursor: pointer;
    svg {
      transition: transform 0.3s ease, fill 0.3s ease;
    }
    &:hover {
      svg {
        fill: #000;
        transform: rotate(90deg);
      }
    }
  `;

  const dateStyle = css`
    margin-right: 0.5rem;
    font-size: 1.2rem;
    font-family: PT Serif;
  `;

  return (
    <div css={taskCardStyle} onClick={hover ? undefined : onClick}>
      <div css={statusBorderStyle}></div>
      <div css={statusOverlayStyle}></div>
      <div css={taskTitleStyle}>{title}</div>
      <div css={[avatarStyle, { hasSubtasks }]}></div>
      <div css={actionButtonsStyle}>
        <div css={dateStyle}>{dueDate}</div>
        {isComplete ? <span>&#10003;</span> : null}
        {hasSubtasks ? (
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handleToggleSubtasks}
            css={dropDownButtonStyle}
          >
            <RightWedgeThin
              size={20}
              rotation={hover ? 90 : dropdownActive ? 90 : 0}
              fillColor={hover ? '#777' : dropdownActive ? '#777' : '#bbb'}
            />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TaskCard;
