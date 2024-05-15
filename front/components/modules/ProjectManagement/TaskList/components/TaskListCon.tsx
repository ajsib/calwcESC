import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import { Task } from "../../Types";
import { fetchTaskData } from "../services/fetchTaskData";
import { useProjectManagement } from "../../ProjectManagementContext";

const TaskListCon = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { selectedStatus, selectedBucket, allTasks, setAllTasks } = useProjectManagement();

    useEffect(() => {
        fetchTaskData().then((data) => {
            setTasks(data);
            setAllTasks(data);
        });
    }, []);

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
        <TaskList
            tasks={filteredTasks}
            expandedTaskId={expandedTaskId}
            openTaskDetails={openTaskDetails}
            toggleSubtasks={toggleSubtasks}
            selectedTask={selectedTask}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
        />
    );
};

export default TaskListCon;
