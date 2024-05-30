/** @jsxImportSource @emotion/react */
import React, { createContext, useContext, useState, useEffect } from "react";
import { Task, Person, Subtask } from '@/public/Types/GlobalTypes';
import { fetchTaskData, fetchSubtasksByTaskId, fetchPeopleAssignedToTask, fetchTasksAssignedToUser } from './services/fetchTaskData';
import { css } from "@emotion/react";
import { useUserProfile } from '@/globalContexts/userContext';

const ProjectManagementContext = createContext<any>(null);

const commonContainerStyle = css`
  background-color: #E9E9E9;
`;

export const useProjectManagement = () => useContext(ProjectManagementContext);

export const ProjectManagementProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [selectedBucket, setSelectedBucket] = useState<string>("All");
    const [teams, setTeams] = useState<string[]>(["All"]);
    const [allTasks, setAllTasks] = useState<Task[]>([]);
    const [subtasks, setSubtasks] = useState<{ [key: number]: Subtask[] }>({});
    const [people, setPeople] = useState<{ [key: number]: Person[] }>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
    const [filteredArchivedTasks, setFilteredArchivedTasks] = useState<Task[]>([]);
    const [archivedTasks, setArchivedTasks] = useState<Task[]>([]);
    const [showArchived, setShowArchived] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const { profile } = useUserProfile();
    const currentUserId = profile?.employee_id || 0;
    const currentUserRole = profile?.role || '';

    useEffect(() => {
        const fetchData = async () => {
            try {
                let taskData: Task[] = [];

                if (currentUserRole === "Staff") {
                    taskData = await fetchTasksAssignedToUser(currentUserId);
                } else if (currentUserRole === "ESC Staff") {
                    taskData = await fetchTaskData();
                }

                setAllTasks(taskData);

                const subtaskPromises = taskData.map(task => fetchSubtasksByTaskId(task.task_id));
                const subtaskResults = await Promise.all(subtaskPromises);
                const subtaskMap: { [key: number]: Subtask[] } = {};
                taskData.forEach((task, index) => {
                    subtaskMap[task.task_id] = subtaskResults[index];
                });
                setSubtasks(subtaskMap);

                const peoplePromises = taskData.map(task => fetchPeopleAssignedToTask(task.task_id));
                const peopleResults = await Promise.all(peoplePromises);
                const peopleMap: { [key: number]: Person[] } = {};
                taskData.forEach((task, index) => {
                    peopleMap[task.task_id] = peopleResults[index];
                });
                setPeople(peopleMap);
            } catch (error) {
                console.error("Failed to fetch data", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [currentUserRole, currentUserId]);

    useEffect(() => {
        const filterTasks = () => {
            const filtered = allTasks.filter((task: Task) => {
                const statusMatch = selectedStatus ? task.status === selectedStatus : true;
                const bucketMatch = selectedBucket && selectedBucket !== "All" ? task.bucket === selectedBucket : true;
                const titleMatch = searchTerm ? task.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
                const notArchived = !archivedTasks.some(archivedTask => archivedTask.task_id === task.task_id);
                return statusMatch && bucketMatch && titleMatch && notArchived;
            });
            setFilteredTasks(filtered);
        };

        const filterArchivedTasks = () => {
            const filtered = archivedTasks.filter((task: Task) => {
                const bucketMatch = selectedBucket && selectedBucket !== "All" ? task.bucket === selectedBucket : true;
                const titleMatch = searchTerm ? task.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
                return bucketMatch && titleMatch;
            });
            setFilteredArchivedTasks(filtered);
        };

        filterTasks();
        filterArchivedTasks();
    }, [selectedStatus, selectedBucket, searchTerm, allTasks, archivedTasks]);

    const handleSelectStatus = (status: string) => {
        if (selectedStatus === status) {
            setSelectedStatus(null);
        } else {
            setSelectedStatus(status);
        }
    };

    const handleSelectBucket = (bucket: string) => {
        setSelectedBucket(bucket);
    };

    const updateTeams = (teams: string[]) => {
        setTeams(teams);
    };

    const addTeam = (team: string) => {
        setTeams([...teams, team]);
    };

    const removeTeam = (team: string) => {
        setTeams(teams.filter(t => t !== team));
    };

    const addTask = (task: Task) => {
        setAllTasks([...allTasks, task]);
    };

    const removeTask = (task: Task) => {
        setAllTasks(allTasks.filter(t => t.task_id !== task.task_id));
    };

    const updateTask = (task: Task) => {
        setAllTasks(allTasks.map(t => t.task_id === task.task_id ? task : t));
    };

    const handleShowArchived = () => {
        setShowArchived(!showArchived);
    };

    const archiveTask = (task: Task) => {
        if (!archivedTasks.some(archivedTask => archivedTask.task_id === task.task_id)) {
            setArchivedTasks([...archivedTasks, task]);
        }
    };

    const unarchiveTask = (task: Task) => {
        setArchivedTasks(archivedTasks.filter(t => t.task_id !== task.task_id));
        console.log("Task unarchived:", task.bucket);
    };

    return (
        <div css={commonContainerStyle}>
            <ProjectManagementContext.Provider
                value={{
                    selectedStatus,
                    selectedBucket,
                    teams,
                    handleSelectStatus,
                    handleSelectBucket,
                    addTeam,
                    removeTeam,
                    updateTeams,
                    setAllTasks,
                    allTasks,
                    filteredTasks,
                    filteredArchivedTasks,
                    archivedTasks,
                    addTask,
                    removeTask,
                    updateTask,
                    subtasks,
                    people,
                    isLoading,
                    showArchived,
                    handleShowArchived,
                    searchTerm,
                    setSearchTerm,
                    archiveTask,
                    unarchiveTask
                }}
            >
                {children}
            </ProjectManagementContext.Provider>
        </div>
    );
};
