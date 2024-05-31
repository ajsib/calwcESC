/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Circle from '@/components/UI/icons/Dot';
import { Ticket } from '@/public/Types/GlobalTypes';

interface TicketDisplayProps {
  ticket: Ticket;
}

const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  margin: 2rem;
  border: 1px solid #ccc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const headerStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const infoStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const priorityStyle = (color: string) => css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${color};
`;

const TicketDisplay: React.FC<TicketDisplayProps> = ({ ticket }) => {
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
    <div css={containerStyle}>
      <h1 css={headerStyle}>Ticket ID: {ticket.ticket_id}</h1>
      <div css={infoStyle}>
        <p><strong>Title:</strong> {ticket.title}</p>
        <p><strong>Description:</strong> {ticket.description_question_set}</p>
        <p><strong>Status:</strong> {ticket.status}</p>
        <p css={priorityStyle(getColor(ticket.priority).color)}>
          <strong>Priority:</strong> {getColor(ticket.priority).icon} {ticket.priority}
        </p>
        <p><strong>Created Date:</strong> {ticket.date}</p>
        <p><strong>Sponsor:</strong> {ticket.sponsor}</p>
      </div>
    </div>
  );
};

export default TicketDisplay;
