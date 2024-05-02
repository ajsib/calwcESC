/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Circle from '@/components/UI/Dot';
import { Ticket } from '@/components/Shared/Types/types';

// Layout for the stats and button container
const statsOverviewStyle = css`
  display: flex;
  justify-content: space-between;
  background-color: #FBFBFB;
  padding: 1rem;
  gap: 1rem;
  align-items: stretch;
`;

// Style for the stats cards
const statCardStyle = css`
  border: 1px solid #ddd;
  background-color: #fff;
  text-align: center;
  cursor: pointer;
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const titleStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  `;

// Container for buttons
const buttonContainerStyle = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  gap: 1rem;
  background-color: #fff;
  justify-content: flex-start; 
  padding: 1rem;
  flex: 0 1 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Style for each button
const buttonStyle = css`
  border: 1px solid #ddd;
  cursor: pointer;
  padding: 1rem;
  width: calc(100% - 2rem); 
  text-align: center; 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eaeaea;
  }
`;

const Stats: React.FC<{ tickets: Ticket[] }> = ({ tickets }) => {
  const openTickets = tickets.filter(ticket => ticket.status === "Open");
  const highPriorityTickets = tickets.filter(ticket => ticket.priority === "High");
  const mediumPriorityTickets = tickets.filter(ticket => ticket.priority === "Medium");
  const lowPriorityTickets = tickets.filter(ticket => ticket.priority === "Low");

  return (
    <div css={statsOverviewStyle}>
      <div css={statCardStyle}>
        <h2>{openTickets.length}</h2>
        <p>Open Tickets</p>
      </div>
      <div css={statCardStyle}>
        <h2>{highPriorityTickets.length}</h2>
        <p css={titleStyle}><Circle size={10} color="red" /> High Priority</p>
      </div>
      <div css={statCardStyle}>
        <h2>{mediumPriorityTickets.length}</h2>
        <p css={titleStyle}><Circle size={10} color="orange" />Medium Priority</p>
      </div>
      <div css={statCardStyle}>
        <h2>{lowPriorityTickets.length}</h2>
        <p css={titleStyle}><Circle size={10} color="green" />Low Priority</p>
      </div>
      <div css={buttonContainerStyle}>
        <div css={buttonStyle}>Project Management</div>
        <div css={buttonStyle}>Manual Entry</div>
      </div>
    </div>
  );
};

export default Stats;
