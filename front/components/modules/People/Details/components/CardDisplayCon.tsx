import { useEffect, useState } from 'react';
import CardDisplay from './CardDisplay';
import { fetchTicketData, fetchFileData, fetchTaskData, fetchSubtaskDataById } from '../services/fetchPersonsStuff';
import { Ticket, Task, File, Subtask } from '@/public/Types/GlobalTypes';

const CardDisplayCon = ({ selectedTab }: { selectedTab: string }) => {
    const [ticketsData, setTicketsData] = useState<Ticket[]>([]);
    const [filesData, setFilesData] = useState<File[]>([]);
    const [tasksData, setTasksData] = useState<Task[]>([]);
    const [subtasksData, setSubtasksData] = useState<{ [key: number]: Subtask[] }>({});

    useEffect(() => {
        const fetchData = async () => {
            const ticketData = await fetchTicketData();
            const fileData = await fetchFileData();
            const taskData = await fetchTaskData();
            setTicketsData(ticketData);
            setFilesData(fileData);
            setTasksData(taskData);

            const subtaskPromises = taskData.map(task => fetchSubtaskDataById(task.task_id));
            const subtaskResults = await Promise.all(subtaskPromises);
            const subtaskMap: { [key: number]: Subtask[] } = {};
            taskData.forEach((task, index) => {
                subtaskMap[task.task_id] = subtaskResults[index];
            });
            setSubtasksData(subtaskMap);
        };

        fetchData();
    }, []);

    return (
        <CardDisplay
            selectedTab={selectedTab}
            ticketsData={ticketsData}
            filesData={filesData}
            tasksData={tasksData}
            subtasksData={subtasksData}
        />
    );
};

export default CardDisplayCon;
