import { useState } from "react";
import TaskList from "./TaskList";
import { useProjectManagement } from "../../ProjectManagementContext";
import TaskCardSkeleton from "./TaskCardSkeleton";
import { Task } from "@/public/Types/GlobalTypes";
import Archive from "./Archive";

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
        </>
    );
};

export default TaskListCon;
