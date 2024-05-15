/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TaskCard from './TaskCard';
import SubTaskCard from './SubTaskCard';
import TaskDetailsModal from './TaskDetails/TaskDetailsCon';
import { TaskListProps } from '../Types';


const taskListStyle = css`
  margin: 2rem 0; // Increased top and bottom margins for more separation
`;

const TaskList: React.FC<TaskListProps> = ({ tasks, expandedTaskId, openTaskDetails, toggleSubtasks, selectedTask,  isModalOpen, setIsModalOpen }) => {

  return (
    <div css={taskListStyle}>
      {tasks.map((task) => (
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
