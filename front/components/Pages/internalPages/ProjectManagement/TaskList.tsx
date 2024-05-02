/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import SubTaskCard from './SubTaskCard';

interface SubTask {
  id: number;
  title: string;
  isChecked?: boolean;
}

type Task = {
  id: number;
  title: string;
  subTasks: SubTask[];
  people: number[];
  bucket: string;
  status: string;
  dueDate: string;
};

interface TaskListProps {
  tasks: Task[];
  onAddTask: (newTask: Task) => void; // Function to handle adding a new task
}

const taskListStyle = css`
  margin: 2rem 0; // Increased top and bottom margins for more separation
`;

const TaskList: React.FC<TaskListProps> = ({ tasks, onAddTask }) => {
  const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);

  const toggleSubtasks = (id: number) => {
    setExpandedTaskId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    // Check if there are any new tasks added and expand the newly added task
    if (tasks.length > 0) {
      setExpandedTaskId(tasks[tasks.length - 1].id); // Expand the last added task
    }
  }, [tasks]);

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
