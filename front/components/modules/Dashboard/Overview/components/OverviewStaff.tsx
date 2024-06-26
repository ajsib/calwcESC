/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { OverviewProps } from '../Types';

const modulePreviewStyle = css`
  border: 1px solid #ccc;
  margin: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  flex-grow: 1;
`;

const jsonStyle = css`
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  margin: 1rem;
`;

const ModulePreviewStaff = ({ tasks, tickets, counts }: OverviewProps) => {
  return (
    <div css={modulePreviewStyle}>
      <div css={jsonStyle}>
        <h3>Role: Staff</h3>
      </div>
      <div css={jsonStyle}>
        <h3>Tasks JSON</h3>
        <pre>{JSON.stringify(tasks, null, 2)}</pre>
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

export default ModulePreviewStaff;
