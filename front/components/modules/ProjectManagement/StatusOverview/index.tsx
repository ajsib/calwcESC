/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import StatusOverviewCon from "./components/StatusOverviewCon";

const commonContainerStyle = css`
  width: 100%;
    background-color: #F4F4F4;
`;

const StatusOverview = () => {
    return (
        <div css={commonContainerStyle}>
            <StatusOverviewCon />
        </div>
    );
};

export default StatusOverview;