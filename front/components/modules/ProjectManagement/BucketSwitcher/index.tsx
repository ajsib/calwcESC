/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BucketSwitcherCon from "./components/BucketSwitcherCon";

const commonContainerStyle = css`
    margin-left: 2rem;
    margin-right: 2rem;
`;

const BucketSwitcher = () => {
    return (
        <div css={commonContainerStyle}>
            <BucketSwitcherCon />
        </div>
    );
};

export default BucketSwitcher;