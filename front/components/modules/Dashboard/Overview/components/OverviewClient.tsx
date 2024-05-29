/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import ClientOverview from './ClientOverview';
import ClientTicketsList from './ClientTicketList';
import { ClientOverviewProps } from '../Types';

const modulePreviewStyle = css`
    margin: 2rem;
    display: flex;
    flex-direction: row;
    align-items: stretch; /* Ensure children stretch to the same height */
    justify-content: center;
    line-height: 2rem;
    flex-grow: 1;
    gap: 2rem; /* Add some space between the columns */
`;

const ModulePreviewClient = (props: ClientOverviewProps) => {
  return (
    <div css={modulePreviewStyle}>
      <ClientOverview counts={props.counts} />
      <ClientTicketsList tickets={props.tickets} />
    </div>
  );
};

export default ModulePreviewClient;