/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TaskCard from './TaskCard';
import { useProjectManagement } from '../../ProjectManagementContext';
import SubTaskCard from './SubTaskCard';
import { TaskListProps } from '../Types';
import { Task } from '@/public/Types/GlobalTypes';
import TaskDetailsModal from './TaskDetails/TaskDetailsCon';

const taskListStyle = css`
  margin: 2rem 0;
`;

const Archive = ({ expandedTaskId, openTaskDetails, toggleSubtasks, selectedTask, isModalOpen, setIsModalOpen }: TaskListProps) => {
    const { completedTasks, subtasks, people } = useProjectManagement();

    return (
        <div css={taskListStyle}>
            {completedTasks.map((task : Task) => (
                <div key={task.task_id}>
                    <TaskCard
                        onClick={() => openTaskDetails(task)}
                        title={task.title}
                        dueDate={task.due_date}
                        isComplete={true}
                        onToggleSubtasks={() => toggleSubtasks(task.task_id)}
                        expandSubtasks={expandedTaskId === task.task_id}
                        subTasks={subtasks[task.task_id]}
                        people={people[task.task_id]}
                        bucket={task.bucket}
                        status={task.status}
                    />

                    {expandedTaskId === task.task_id && (
                        <SubTaskCard subTasks={subtasks[task.task_id]} expanded={expandedTaskId === task.task_id} />
                    )}
                </div>
            ))}
            {selectedTask && (
                <TaskDetailsModal
                    task={selectedTask}
                    subtasks={subtasks[selectedTask.task_id]}
                    people={people[selectedTask.task_id]}
                    isOpen={isModalOpen}
                    close={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default Archive;
