/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ClientOverviewProps } from '../Types';
import { useRouter } from 'next/router';

const myDayStyle = css`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #FDFDFD;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const titleStyle = css`
  font-size: 2rem;
  font-weight: normal;
  margin-bottom: 2rem;
  color: #515151;
  margin-left: 16px;
  margin-top: 16px;
`;

const contentStyle = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem; /* Add some space between the cards */
`;

const cardStyle = css`
  background-color: #F5F5F5;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

const headerStyle = css`
  font-size: 1.75rem;
  font-weight: normal;
  margin-bottom: 1rem;
`;

const textStyle = css`
  margin-bottom: 0.5rem;
  color: #606060;
  font-size: 1.25rem;
`;

const buttonStyle = css`
  padding: 0.5rem 1rem;
  margin: 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #005bb5;
  }
`;

const ClientOverview = ({ counts }: Omit<ClientOverviewProps, 'tasks' | 'tickets'>) => {
  const router = useRouter();

  return (
    <div css={myDayStyle}>
      <button css={buttonStyle} onClick={() => router.push('/ticket-intake')}>New Ticket</button>
      <div css={cardStyle}>
        <h3 css={headerStyle}>Ticket Overview</h3>
        <div css={textStyle}>Total Tickets: {counts?.total}</div>
        <div css={textStyle}>Open Tickets: {counts?.open}</div>
        <div css={textStyle}>Closed Tickets: {counts?.closed}</div>
      </div>
    </div>
  );
};

export default ClientOverview;