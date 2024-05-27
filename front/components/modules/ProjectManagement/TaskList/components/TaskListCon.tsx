/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import { useProjectManagement } from "../../ProjectManagementContext";
import TaskCardSkeleton from "./TaskCardSkeleton";
import { Task } from "@/public/Types/GlobalTypes";
import TaskLegend from "@/components/modules/ProjectManagement/TaskList/components/TaskLegend";
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
    const { selectedStatus, selectedBucket, allTasks, setAllTasks, subtasks, people, isLoading } = useProjectManagement();

    useEffect(() => {
        setAllTasks(allTasks); // This seems redundant, consider removing if not needed
    }, [allTasks, setAllTasks]);

    const openTaskDetails = (task: Task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const toggleSubtasks = (id: number) => {
        setExpandedTaskId(prevId => prevId === id ? null : id);
    };

    // Filter tasks based on status and bucket
    const filteredTasks = allTasks.filter((task: Task) => {
        const statusMatch = selectedStatus ? task.status === selectedStatus : true;
        const bucketMatch = selectedBucket && selectedBucket !== "All" ? task.bucket === selectedBucket : true;
        return statusMatch && bucketMatch;
    });

    return (
        <>
            <div css={taskContainer}>
            <TaskLegend />
            {isLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                    <TaskCardSkeleton key={index} />
                ))
            ) : (
                <TaskList
                    tasks={filteredTasks}
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
