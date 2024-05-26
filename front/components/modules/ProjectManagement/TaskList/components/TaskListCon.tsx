import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import { useProjectManagement } from "../../ProjectManagementContext";
import TaskCardSkeleton from "./TaskCardSkeleton";
import { Task } from "@/public/Types/GlobalTypes";

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
        </>
    );
};

export default TaskListCon;
