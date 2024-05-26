/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ClientOverviewProps } from '../Types';
import { useRouter } from 'next/router';

const modulePreviewStyle = css`
  border: 1px solid #ccc;
  margin: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  overflow-y: scroll;
`;

const jsonStyle = css`
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  margin: 1rem;
`;

const ModulePreviewClient = ({ tickets, counts }: Omit<ClientOverviewProps, 'tasks'>) => {
  const router = useRouter();
  return (
    <div css={modulePreviewStyle}>
      <button onClick={() => router.push('/ticket-intake')}>New Ticket</button>
      <div css={jsonStyle}>
        <h3>Role: Client</h3>
      </div>
      <div css={jsonStyle}>
        <h3>Tickets JSON</h3>
        <pre>{JSON.stringify(tickets, null, 2)}</pre>
      </div>
      <div css={jsonStyle}>
        <h3>Counts JSON</h3>
        <pre>{JSON.stringify(counts, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ModulePreviewClient;
