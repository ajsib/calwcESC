/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ClientOverviewProps } from '../Types';

const myDayListStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #F9F9F9;
  box-sizing: border-box;
`;

const topSectionStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #F5F5F5;
  color: #fff;
  padding: 1rem;
`;

const tabStyle = css`
  font-size: 1rem;
  font-weight: bold;
  color: #515151;
  cursor: pointer;
  padding: 0.5rem 1rem;
  &:hover {
    color: #ccc;
  }
`;

const messageSectionStyle = css`
  flex-grow: 1;
  overflow: auto; /* Enable scrolling for tickets */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #F9F9F9;
  padding: 2rem;
  box-sizing: border-box;
`;

const messageStyle = css`
  color: #333;
  font-size: 1.25rem;
  text-align: center;
`;

const ticketCardStyle = css`
  background-color: #E8E8E8;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  width: 80%;
`;

const textStyle = css`
  margin-bottom: 0.5rem;
  color: #606060;
  font-size: 1.25rem;
`;

const ClientTicketsList = ({ tickets }: Omit<ClientOverviewProps, 'tasks' | 'counts'>) => {
  return (
    <div css={myDayListStyle}>
      <div css={topSectionStyle}>
        <div css={tabStyle}>My Tickets</div>
      </div>
      <div css={messageSectionStyle}>
        {tickets.length > 0 ? (
          tickets.map(ticket => (
            <div key={ticket.ticket_id} css={ticketCardStyle}>
              <div css={textStyle}><strong>Title:</strong> {ticket.title}</div>
              <div css={textStyle}><strong>Status:</strong> {ticket.status}</div>
            </div>
          ))
        ) : (
          <div css={messageStyle}>No tickets assigned.</div>
        )}
      </div>
    </div>
  );
};

export default ClientTicketsList;