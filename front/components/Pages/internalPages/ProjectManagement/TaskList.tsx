/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import SubTaskCard from './SubTaskCard';
import TaskDetailsModal from './Modals/TaskDetails';

interface SubTask {
  id: number;
  title: string;
  isChecked?: boolean;
}

interface Task {
  id: number;
  title: string;
  subTasks: SubTask[];
  people: number[];
  bucket: string;
  status: string;
  dueDate: string;
}

interface TaskListProps {
  tasks: Task[];
  onAddTask: (newTask: Task) => void; // Function to handle adding a new task
}

const taskListStyle = css`
  margin: 2rem 0; // Increased top and bottom margins for more separation
`;

const TaskList: React.FC<TaskListProps> = ({ tasks, onAddTask }) => {
  const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openTaskDetails = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const toggleSubtasks = (id: number) => {
    setExpandedTaskId(prevId => prevId === id ? null : id);
  };

  useEffect(() => {
    if (tasks.length > 0) {
      setExpandedTaskId(tasks[tasks.length - 1].id);
    }
  }, [tasks]);

  const filteredTasks = tasks.filter(task => task.status !== 'Complete');

  return (
    <div css={taskListStyle}>
      {filteredTasks.map((task) => (
        <div key={task.id}>
          <TaskCard
            onClick={() => openTaskDetails(task)}
            title={task.title}
            dueDate={task.dueDate}
            isComplete={false}
            onToggleSubtasks={() => toggleSubtasks(task.id)}
            expandSubtasks={expandedTaskId === task.id}
            subTasks={task.subTasks}
            people={task.people}
            bucket={task.bucket}
            status={task.status}
          />
          {task.subTasks.length > 0 && <SubTaskCard subTasks={task.subTasks} expanded={expandedTaskId === task.id} />}
        </div>
      ))}
      {selectedTask && (
        <TaskDetailsModal
          task={selectedTask}
          isOpen={isModalOpen}
          close={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default TaskList;
