/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NewsSearchCon from './NewsSearchCon';
import NewsDisplayCon from './NewsDisplayCon';

const allNewsStyle = css`
    margin-left: var(--margin);
    margin-right: var(--margin);
`;

export default function AllNews() {
    return (
        <div css={allNewsStyle}>
            <h1>News</h1>
            <NewsSearchCon />
            <NewsDisplayCon />
        </div>
    );
}
