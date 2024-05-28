/** @jsxImportSource @emotion/react */
import React, { createContext, useContext, useState, useEffect } from "react";
import { Task, Person, Subtask } from '@/public/Types/GlobalTypes';
import { fetchTaskData, fetchSubtasksByTaskId, fetchPeopleAssignedToTask } from './services/fetchTaskData';
import {css} from "@emotion/react";

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
    const [myTasks, setMyTasks] = useState<Task[]>([]);
    const [myFilteredTasks, setMyFilteredTasks] = useState<Task[]>([]);
    const [subtasks, setSubtasks] = useState<{ [key: number]: Subtask[] }>({});
    const [people, setPeople] = useState<{ [key: number]: Person[] }>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
    const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
    const [showArchived, setShowArchived] = useState<boolean>(false);

    const { profile } = useUserProfile();
    const currentUserId = profile?.employee_id || 0;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const taskData = await fetchTaskData();
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

                const userTasks = await fetchTasksAssignedToUser(currentUserId);
                console.log('User tasks:', userTasks); // Debug: Check if user tasks are fetched correctly
                setMyTasks(userTasks);
            } catch (error) {
                console.error("Failed to fetch data", error);
            } finally {
                setIsLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filterTasks = () => {
            const filtered = allTasks.filter((task: Task) => {
                const statusMatch = selectedStatus ? task.status === selectedStatus : true;
                const bucketMatch = selectedBucket && selectedBucket !== "All" ? task.bucket === selectedBucket : true;
                const notCompleted = !task.complete; // Ensure task is not completed
                return statusMatch && bucketMatch && notCompleted;
            });
            setFilteredTasks(filtered);
        };

        const filterMyTasks = () => {
            const filtered = myTasks.filter((task: Task) => {
                const statusMatch = selectedStatus ? task.status === selectedStatus : true;
                const bucketMatch = selectedBucket && selectedBucket !== "All" ? task.bucket === selectedBucket : true;
                const notCompleted = !task.complete; // Ensure task is not completed
                return statusMatch && bucketMatch && notCompleted;
            });
            console.log('Filtered my tasks:', filtered); // Debug: Check if filtering is correct
            setMyFilteredTasks(filtered);
        };

        const completed = allTasks.filter((task: Task) => task.complete);
        setCompletedTasks(completed);

        filterTasks();
        filterMyTasks();
    }, [selectedStatus, selectedBucket, allTasks, myTasks]);

    const handleSelectStatus = (status: string) => {
        if (selectedStatus === status) {
            setSelectedStatus(null); // Clear selection if the same status is clicked again
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
                myFilteredTasks,
                filteredTasks,
                completedTasks,
                addTask,
                removeTask,
                updateTask,
                subtasks,
                people,
                isLoading,
                showArchived,
                handleShowArchived
            }}
        >
            {children}
        </ProjectManagementContext.Provider>
            </div>
    );
};
