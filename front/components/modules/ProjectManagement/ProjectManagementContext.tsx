import React, { createContext, useContext, useState, useEffect } from "react";
import { Task, Person, Subtask } from '@/public/Types/GlobalTypes';
import { fetchTaskData, fetchSubtasksByTaskId, fetchPeopleAssignedToTask } from './services/fetchTaskData';

const ProjectManagementContext = createContext<any>(null);

export const useProjectManagement = () => useContext(ProjectManagementContext);

export const ProjectManagementProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [selectedBucket, setSelectedBucket] = useState<string>("All");
    const [teams, setTeams] = useState<string[]>(["All"]);
    const [allTasks, setAllTasks] = useState<Task[]>([]);
    const [subtasks, setSubtasks] = useState<{ [key: number]: Subtask[] }>({});
    const [people, setPeople] = useState<{ [key: number]: Person[] }>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);

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
            } catch (error) {
                console.error("Failed to fetch data", error);
            } finally {
                setIsLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchData();
    }, []);

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

    return (
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
                addTask,
                removeTask,
                updateTask,
                subtasks,
                people,
                isLoading
            }}
        >
            {children}
        </ProjectManagementContext.Provider>
    );
};
