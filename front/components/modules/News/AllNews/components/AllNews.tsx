/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NewsSearchCon from './NewsSearchCon';
import NewsDisplayCon from './NewsDisplayCon';


const allNewsSyle = css`
    margin-top: 3rem;
    margin-left: var(--margin);
    margin-right: var(--margin);
`;

export default function AllNews() {
    return (
        <div css={allNewsSyle}>
            <h1>News</h1>
            <NewsSearchCon />
            <NewsDisplayCon />
        </div>
    );
}