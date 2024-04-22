// components/Pages/internalPages/ProjectManagement/TaskList.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TaskCard from './TaskCard';
import SubTaskCard from './SubTaskCard';

interface Task {
  id: number;
  title: string;
  // Assume other properties like assignee, due date, etc., are part of the Task type
}

interface TaskListProps {
  tasks?: Task[];
}

const taskListStyle = css`
  margin: 1rem 2rem;
`;

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  // Replace with actual tasks data
  const mockTasks: Task[] = tasks || [
    { title: 'Design Homepage', id: 1 },
    { title: 'Implement Login Feature', id: 2 },
    { title: 'Refactor Codebase', id: 3 },
    { title: 'Test New Feature', id: 4 },
    // ... other tasks
  ];

  return (
    <div css={taskListStyle}>
      {mockTasks.map((task) => (
        <div key={task.id}>
          <TaskCard title={task.title} /* Pass other props as needed */ />
          <SubTaskCard parentTask={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
