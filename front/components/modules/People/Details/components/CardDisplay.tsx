/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TicketCards from '../../../Tickets/TicketCards/components/TicketCards';
import TaskCard from '../../../ProjectManagement/TaskList/components/TaskCard';
import FileCard from '../../../Files/RecentFiles/components/FileCard';
import { CardDisplayProps } from '../Types';

const ticketsStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; // Increased gap for better separation
  margin: 1rem;
`;

const CardDisplay = ({ selectedTab, ticketsData, tasksData, filesData }: CardDisplayProps) => {
  return (
    <div css={ticketsStyle}>
      {selectedTab === 'tickets' && ticketsData.map((ticket, index) => (
        <TicketCards key={index} tickets={ticketsData} />
      ))}
      {selectedTab === 'files' && filesData.map((file, index) => (
        <FileCard key={index} name={file.fileName} />
      ))}
      {selectedTab === 'tasks' && tasksData.map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          people={task.people}
          status={task.status}
          dueDate={task.dueDate}
          onClick={() => {}}
          isComplete={false}
          onToggleSubtasks={() => {}}
          expandSubtasks={false}
          subTasks={task.subTasks}
          bucket={task.bucket}
        />
      ))}
    </div>
  );
};

export default CardDisplay;
