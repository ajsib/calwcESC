/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BucketSwitcherCon from "./components/BucketSwitcherCon";

const commonContainerStyle = css`
  margin: 2rem var(--margin);
  width: calc(100% - 2 * var(--margin));
`;

const BucketSwitcher = () => {
    return (
        <div css={commonContainerStyle}>
            <BucketSwitcherCon />
        </div>
    );
};

export default BucketSwitcher;