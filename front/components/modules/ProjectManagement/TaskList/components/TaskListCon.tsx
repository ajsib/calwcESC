import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import { Task } from "@/public/Types/GlobalTypes";
import { fetchTaskData } from "../services/fetchTaskData";
import { useProjectManagement } from "../../ProjectManagementContext";
import TaskCardSkeleton from "./TaskCardSkeleton";

const TaskListCon = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { selectedStatus, selectedBucket, allTasks, setAllTasks } = useProjectManagement();

    useEffect(() => {
        fetchTaskData().then((data) => {
            setTasks(data);
            setAllTasks(data);
            setIsLoading(false); // Set loading to false after data is fetched
        });
    }, [setAllTasks]);

    useEffect(() => {
        setTasks(allTasks);
    }, [allTasks]);

    const openTaskDetails = (task: Task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const toggleSubtasks = (id: number) => {
        setExpandedTaskId(prevId => prevId === id ? null : id);
    };

    // Filter tasks based on status and bucket
    const filteredTasks = tasks.filter(task => {
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
