/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import StatusOverviewCon from "./components/StatusOverviewCon";

const commonContainerStyle = css`
  margin: 2rem var(--margin);
  width: calc(100% - 2 * var(--margin));
`;

const StatusOverview = () => {
    return (
        <div css={commonContainerStyle}>
            <StatusOverviewCon />
        </div>
    );
};

export default StatusOverview;