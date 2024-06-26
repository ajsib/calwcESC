/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';
import TaskCard from './TaskCard';
import TaskDetailsModal from './TaskDetails/TaskDetailsCon';
import { useProjectManagement } from '../../ProjectManagementContext';
import SubTaskCard from './SubTaskCard';
import { TaskListProps } from '../Types';
import { Task } from '@/public/Types/GlobalTypes';

const taskListStyle = css`
  margin: 2rem 0;
`;

const noTasksStyle = css`
  margin: 2rem 0;
  text-align: center;
  font-size: 1.5rem;
  color: #555;
`;

const TaskList = ({ expandedTaskId, openTaskDetails, toggleSubtasks, selectedTask, isModalOpen, setIsModalOpen, isSubTaskVisible }: TaskListProps) => {
    const { filteredTasks, subtasks, people, searchTerm } = useProjectManagement();

    useEffect(() => {
        const taskId = localStorage.getItem('taskId');
        if (taskId) {
            const task = filteredTasks.find((task: Task) => task.task_id === parseInt(taskId as string));
            if (task) {
                openTaskDetails(task);
                setIsModalOpen(true);
            }
        }
    }, [filteredTasks, openTaskDetails, setIsModalOpen]);

    useEffect(() => {
        return () => {
            localStorage.removeItem('taskId');
        };
    }, []);

    return (
        <div css={taskListStyle}>
            {filteredTasks.length === 0 ? (
                <div css={noTasksStyle}>
                    {searchTerm !== "" ? `No Tasks Matching "${searchTerm}"` : "No Tasks To Show"}
                </div>
            ) : (
                filteredTasks.map((task: Task) => {
                    return (
                        <div key={task.task_id}>
                            <TaskCard
                                onClick={() => openTaskDetails(task)}
                                task_id={task.task_id}
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
                                <SubTaskCard subTasks={subtasks[task.task_id]} expanded={isSubTaskVisible} />
                            )}
                        </div>
                    )
                })
            )}
            {selectedTask && (
                <TaskDetailsModal
                    task={selectedTask}
                    subtasks={subtasks[selectedTask.task_id]}
                    people={people[selectedTask.task_id]}
                    isOpen={isModalOpen}
                    close={() => { setIsModalOpen(false); localStorage.removeItem('taskId'); }}
                />
            )}
        </div>
    );
};

export default TaskList;
