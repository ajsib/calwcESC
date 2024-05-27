/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TaskCard from './TaskCard';
import TaskDetailsModal from './TaskDetails/TaskDetailsCon';
import { useProjectManagement } from '../../ProjectManagementContext';
import SubTaskCard from './SubTaskCard';
import { TaskListProps } from '../Types';
import { Task } from '@/public/Types/GlobalTypes';
import { useUserProfile } from '@/globalContexts/userContext';

const taskListStyle = css`
  margin: 2rem 0;
`;

const TaskList = ({ expandedTaskId, openTaskDetails, toggleSubtasks, selectedTask, isModalOpen, setIsModalOpen }: TaskListProps) => {
    const { filteredTasks, subtasks, people, myFilteredTasks } = useProjectManagement();
    const { profile } = useUserProfile();

    const tasks = profile && profile.role === 'Staff' ? myFilteredTasks : filteredTasks;

    return (
        <div css={taskListStyle}>
            {tasks.map((task: Task) => (
                <div key={task.task_id}>
                    <TaskCard
                        onClick={() => openTaskDetails(task)}
                        title={task.title}
                        dueDate={task.due_date}
                        isComplete={task.complete}
                        onToggleSubtasks={() => toggleSubtasks(task.task_id)}
                        expandSubtasks={expandedTaskId === task.task_id}
                        subTasks={subtasks[task.task_id]}
                        people={people[task.task_id]}
                        bucket={task.bucket}
                        status={task.status}
                        ticket={task.ticket_id}
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

export default TaskList;
