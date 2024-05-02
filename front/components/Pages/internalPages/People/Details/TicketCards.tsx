/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TicketCards from '../../Tickets/TicketCards';
import ticketsData from '@/components/Shared/API/Data/tickets-dummy.json';

const ticketsStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; // Increased gap for better separation
  margin: 1rem;
`;

const Tickets = () => {
  return (
    <div css={ticketsStyle}>
      <TicketCards tickets={ticketsData} />
    </div>
  );
};

export default Tickets;
