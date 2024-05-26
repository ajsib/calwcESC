import React, { createContext, useContext, useState } from "react";
import { Task } from '@/public/Types/GlobalTypes';

const ProjectManagementContext = createContext<any>(null);

export const useProjectManagement = () => useContext(ProjectManagementContext);

export const ProjectManagementProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [selectedBucket, setSelectedBucket] = useState<string>("All");
    const [teams, setTeams] = useState<string[]>(["All"]);
    const [allTasks, setAllTasks] = useState<Task[]>([]);

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
                updateTask
            }}
        >
            {children}
        </ProjectManagementContext.Provider>
    );
};
