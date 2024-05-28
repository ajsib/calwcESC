/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import { useProjectManagement } from "../../ProjectManagementContext";
import TaskCardSkeleton from "./TaskCardSkeleton";
import { Task } from "@/public/Types/GlobalTypes";
import TaskLegend from "@/components/modules/ProjectManagement/TaskList/components/TaskLegend";
import Archive from "./Archive";
import {css} from "@emotion/react";

const taskContainer = css`
    background-color: #ffffff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.09);
    margin-left: 2rem;
    margin-right: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;


const TaskListCon = () => {
    const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { isLoading, showArchived } = useProjectManagement();

    const openTaskDetails = (task: Task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const toggleSubtasks = (id: number) => {
        setExpandedTaskId(prevId => prevId === id ? null : id);
    };

    return (
        <>
            <div css={taskContainer}>
            <TaskLegend />
            {isLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                    <TaskCardSkeleton key={index} />
                ))
            ) : showArchived ? (
                <Archive
                    expandedTaskId={expandedTaskId}
                    openTaskDetails={openTaskDetails}
                    toggleSubtasks={toggleSubtasks}
                    selectedTask={selectedTask}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
            ) : (
                <TaskList
                    expandedTaskId={expandedTaskId}
                    openTaskDetails={openTaskDetails}
                    toggleSubtasks={toggleSubtasks}
                    selectedTask={selectedTask}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
            )}
            </div>
        </>
    );
};

export default TaskListCon;
