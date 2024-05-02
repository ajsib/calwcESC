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
  subTasks: SubTask[];
  people: Number[];
  bucket: string;
  status: string;
  dueDate: string;
}

interface TaskListProps {
  tasks: Task[];
}

const taskListStyle = css`
  margin: 2rem 0; // Increased top and bottom margins for more separation
`;

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);

  const toggleSubtasks = (id: number) => {
    setExpandedTaskId((prevId) => (prevId === id ? null : id));
  };

  const filteredTasks = tasks.filter(task => task.status !== 'Complete'); // Filter out tasks with status 'Complete'

  return (
    <div css={taskListStyle}>
      {filteredTasks.map((task) => (
        <div key={task.id}>
          <TaskCard
            title={task.title}
            isComplete={false}
            onToggleSubtasks={() => toggleSubtasks(task.id)}
            expandSubtasks={expandedTaskId === task.id}
            subTasks={task.subTasks}
            people={task.people}
            bucket={task.bucket}
            status={task.status}
            dueDate={task.dueDate}
          />
          {task.subTasks.length > 0 && <SubTaskCard subTasks={task.subTasks} expanded={expandedTaskId === task.id} />}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
