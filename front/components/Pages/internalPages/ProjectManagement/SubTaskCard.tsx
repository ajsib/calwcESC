/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

interface SubTask {
  id: number;
  title: string;
  isChecked?: boolean; // Added isChecked as optional property
}

interface SubTaskCardProps {
  parentTask: {
    id: number;
    title: string;
  };
}

const subTaskCardStyle = css`
  border: 1px solid #DADADA;
  margin: 0.5rem 0 0.5rem 2rem; /* Adjusted margin */
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

const subTaskTitleStyle = css`
  flex-grow: 1;
`;

const checkboxStyle = css`
  margin-left: 1rem; /* Margin between subtask title and checkbox */
`;

const SubTaskCard: React.FC<SubTaskCardProps> = ({ parentTask }) => {
  // Replace with actual subtasks data
  const [subTasks, setSubTasks] = useState<SubTask[]>([
    { title: 'Subtask 1', id: 1, isChecked: false }, // Added isChecked
    { title: 'Subtask 2', id: 2, isChecked: false }, // Added isChecked
    // ... other subtasks
  ]);

  const handleSubTaskToggle = (id: number) => {
    setSubTasks((prevSubTasks) =>
      prevSubTasks.map((subTask) =>
        subTask.id === id ? { ...subTask, isChecked: !subTask.isChecked } : subTask
      )
    );
  };

  return (
    <div>
      {subTasks.map((subTask) => (
        <div key={subTask.id} css={subTaskCardStyle}>
          <div css={subTaskTitleStyle}>{subTask.title}</div>
          <input
            type="checkbox"
            css={checkboxStyle}
            checked={subTask.isChecked || false}
            onChange={() => handleSubTaskToggle(subTask.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default SubTaskCard;
