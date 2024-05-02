/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import TaskCard from './TaskCard';
import SubTaskCard from './SubTaskCard';

interface SubTask {
  id: number;
  title: string;
  isChecked?: boolean;
}

interface Task {
  id: number;
  title: string;
  hasSubtasks: boolean;
  subTasks: SubTask[];
}

interface TaskListProps {
  tasks: Task[];
}

const taskListStyle = css`
  margin: 1rem 2rem;
`;

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);

  const toggleSubtasks = (id: number) => {
    setExpandedTaskId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div css={taskListStyle}>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskCard
            title={task.title}
            dueDate=""
            isComplete={false}
            onToggleSubtasks={() => toggleSubtasks(task.id)}
            expandSubtasks={expandedTaskId === task.id}
            hasSubtasks={task.hasSubtasks}
          />
          {task.hasSubtasks && <SubTaskCard subTasks={task.subTasks} expanded={expandedTaskId === task.id} />}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
