/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Circle from '@/components/UI/icons/Dot';
import { Ticket } from '../Types';

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
  // get the color/icon based on the priority
  const getColor = (priority: string) => {
    switch (priority) {
      case "High":
        return { color: "red", icon: <Circle size={10} color="red" /> };
      case "Medium":
        return { color: "orange", icon: <Circle size={10} color="orange" /> };
      case "Low":
        return { color: "green", icon: <Circle size={10} color="green" /> };
      default:
        return { color: "gray", icon: <Circle size={10} color="gray" /> };
    }
  };

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
            <span>
            <span css={{ marginLeft: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', marginRight: '16px' }}>
                {getColor(ticket.priority).icon}
                
              </span>
              Priority: {ticket.priority}

            </span>
            <span>Assigned to: {ticket.assignedTo}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketCards;
