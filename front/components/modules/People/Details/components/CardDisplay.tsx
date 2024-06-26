/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TicketCards from '../../../Tickets/TicketCards/components/TicketCards';
import TaskCard from './TaskCard';
import FileCard from '../../../Files/RecentFiles/components/FileCard';
import { CardDisplayProps } from '../Types';

const ticketsStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; // Increased gap for better separation
  margin: 1rem;
`;

const CardDisplay = ({ selectedTab, ticketsData, tasksData, filesData, subtasksData }: CardDisplayProps) => {
  return (
    <div css={ticketsStyle}>
      {selectedTab === 'tickets' && ticketsData.map((ticket, index) => (
        <TicketCards key={index} tickets={ticketsData} />
      ))}
      {selectedTab === 'files' && filesData.map((file, index) => (
        <FileCard key={index} name={file.file_name} />
      ))}
      {selectedTab === 'tasks' && tasksData.map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          status={task.status}
          dueDate={task.due_date}
          isComplete={false}
          subTasks={subtasksData[task.task_id]}
          bucket={task.bucket}
        />
      ))}
    </div>
  );
};

export default CardDisplay;
