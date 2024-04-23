/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface Ticket {
  id: string;
  title: string;
  status: string;
  priority: string;
  date: string;
  assignedTo: string;
  description: string;
}

const ticketCardsStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;  // Increased gap for better separation
  margin: 1rem;
`;

const ticketCardStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; 
  padding: 1.5rem;
  border: 1px solid #ccc;
  box-shadow: 0 0px 0px rgba(0,0,0,0);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }
`;

const ticketHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ticketDescriptionStyle = css`
  max-width: 50%; 
  overflow: hidden;
  word-wrap: break-word;
  line-height: 1.5rem;
  padding: 0.5rem 0rem;
`;

const ticketInfoStyle = css`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #666;
`;

const TicketCards: React.FC<{ tickets: Ticket[] }> = ({ tickets }) => {
  return (
    <div css={ticketCardsStyle}>
      {tickets.map((ticket) => (
        <div css={ticketCardStyle} key={ticket.id}>
          <div css={ticketHeaderStyle}>
            <span>{ticket.title}</span>
            <span>{ticket.date}</span>
          </div>
          <div css={ticketDescriptionStyle} title={ticket.description}>
            {ticket.description}
          </div>
          <div css={ticketInfoStyle}>
            <span>Status: {ticket.status}</span>
            <span>Priority: {ticket.priority}</span>
            <span>Assigned to: {ticket.assignedTo}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketCards;
