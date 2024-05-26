import {useEffect, useState} from 'react';
import CardDisplay from './CardDisplay';
import { fetchTicketData, fetchFileData, fetchTaskData } from '../services/fetchPersonsStuff';
import { Ticket, Task, File } from '@/public/Types/GlobalTypes';

const CardDisplayCon = ({selectedTab} : {selectedTab: string}) => {
    const [ticketsData, setTicketsData] = useState<Ticket[]>([]);
    const [filesData, setFilesData] = useState<File[]>([]);
    const [tasksData, setTasksData] = useState<Task[]>([]);
    useEffect(() => {
        fetchTicketData().then((data) => setTicketsData(data));
        fetchFileData().then((data) => setFilesData(data));
        fetchTaskData().then((data) => setTasksData(data));
    }, []);
    return (
        <CardDisplay
            selectedTab={selectedTab}
            ticketsData={ticketsData}
            filesData={filesData}
            tasksData={tasksData}
        />
    );
};
export default CardDisplayCon;
