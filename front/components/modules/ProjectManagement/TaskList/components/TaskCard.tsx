/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RightWedgeThin from '@/components/UI/arrows/RightWedgeMedium';
import { useState, useEffect } from 'react';
import { TaskCardProps } from '../Types';
import { Person } from '@/public/Types/GlobalTypes';

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  dueDate,
  isComplete,
  onToggleSubtasks,
  expandSubtasks,
  subTasks,
  status,
  onClick,
  people,
  ticket
}) => {
  const [dropDownHover, setDropdownHover] = useState(false);
  const [hoverList, setHoverList] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [hasSubtasks, setHasSubtasks] = useState(subTasks && subTasks.length > 0);

  useEffect(() => {
    setDropdownActive(expandSubtasks);
  }, [expandSubtasks]);

  const handleToggleSubtasks = () => {
    setDropdownActive(!dropdownActive);
    onToggleSubtasks();
  };

  const marginRightValue = hasSubtasks ? '1rem' : '3rem';

  const avatarContainerStyle = css`
    position: relative;
    display: flex;
    margin-right: ${marginRightValue};
  `;

  const avatarStyle = css`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin-left: -10px;
    &:first-of-type {
      margin-left: 0;
    }
  `;

  const hoverListStyle = css`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    z-index: 10;
    white-space: nowrap;
    opacity: ${hoverList ? '1' : '0'};
    transition: opacity 0.3s ease;
  `;

  const taskCardStyle = css`
    border: 1.5px solid #dadada;
    padding: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${dropdownActive ? '1rem' : '0.5rem'};
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease; // Added transition

    &:hover:not(:active) { // Exclude hover effect when the button is being clicked
      transform: ${dropDownHover ? "none" : "translateY(-2px)"};
      box-shadow: ${dropDownHover ? "none" : "0 4px 6px rgba(0,0,0,0.05)"};
      cursor: pointer;
      background-color: rgba(248, 248, 248, 0.62);
    }
  `;

  const statusBorderStyle = css`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: ${status === 'To Do' ? '#4287f5' : status === 'In Progress' ? 'orange' : '#4287f5'};
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

  const getInitials = (name: string) => {
    const [firstName, lastName] = name.split(' ');
    return firstName[0] + (lastName ? lastName[0] : '');
  };

  return (
    <div css={taskCardStyle} onClick={dropDownHover ? undefined : onClick}>
      <div css={statusBorderStyle}></div>
      <div css={statusOverlayStyle}></div>
      <div css={taskTitleStyle}>{title}</div>
      <div>{ticket}</div>
      <div
        css={avatarContainerStyle}
        onMouseEnter={() => setHoverList(true)}
        onMouseLeave={() => setHoverList(false)}
      >
        {people.map((person, index) => (
          <div key={index} css={avatarStyle}>
            {getInitials(person.name)}
            {index === 0 && (
              <div css={hoverListStyle}>
                {people.map((person: Person) => (
                  <div key={person.employee_id}>{person.name}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div css={actionButtonsStyle}>
        <div css={dateStyle}>{dueDate}</div>
        {isComplete ? <span>&#10003;</span> : null}
        {hasSubtasks ? (
          <button
            onMouseEnter={() => setDropdownHover(true)}
            onMouseLeave={() => setDropdownHover(false)}
            onClick={handleToggleSubtasks}
            css={dropDownButtonStyle}
          >
            <RightWedgeThin
              size={20}
              rotation={dropDownHover ? 90 : dropdownActive ? 90 : 0}
              fillColor={dropDownHover ? '#777' : dropdownActive ? '#777' : '#bbb'}
            />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TaskCard;
