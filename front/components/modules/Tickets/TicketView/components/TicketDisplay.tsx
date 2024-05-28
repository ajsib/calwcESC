// components/TicketDisplay.tsx
import React from 'react';
import { Ticket } from '@/public/Types/GlobalTypes';

interface TicketDisplayProps {
  ticket: Ticket;
}

const TicketDisplay: React.FC<TicketDisplayProps> = ({ ticket }) => {
  return (
    <div>
      <h1>Ticket ID: {ticket.ticket_id}</h1>
      <p><strong>Title:</strong> {ticket.title}</p>
      <p><strong>Description:</strong> {ticket.description_question_set}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
      <p><strong>Created Date:</strong> {ticket.date}</p>
      <p><strong>Sponsor:</strong> {ticket.sponsor}</p>
    </div>
  );
};

export default TicketDisplay;
