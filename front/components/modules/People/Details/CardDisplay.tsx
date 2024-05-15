/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TicketCards from '../../Tickets/TicketCards/components/TicketCards';
import TaskCard from '../../ProjectManagement/TaskList/components/TaskCard';
import FileCard from '../../Files/RecentFiles/components/FileCard';
import ticketsData from '../tickets-dummy.json';
import tasksData from '../tasks-dummy.json';
import fileData from '../files-dummy.json';

const ticketsStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; // Increased gap for better separation
  margin: 1rem;
`;

const CardDisplay = ({ selectedTab }: { selectedTab: string }) => {
  return (
    <div css={ticketsStyle}>
      {selectedTab === 'tickets' && <TicketCards tickets={ticketsData} />}
      {selectedTab === 'files' && <FileCard name='File 1' />}
      {selectedTab === 'tasks' && <TaskCard title='Task 1' people={tasksData[1].people} status={tasksData[1].status} dueDate={tasksData[1].dueDate} isComplete={false} onClick={() => {}} onToggleSubtasks={() => {}} expandSubtasks={false} subTasks={tasksData[1].subTasks} bucket={tasksData[1].bucket} />}
    </div>
  );
};

export default CardDisplay;
