/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NewsSearch from './NewsSearch';
import NewsDisplay from './NewsDisplay';


const allNewsSyle = css`
    margin-top: 3rem;
    margin-left: var(--margin);
    margin-right: var(--margin);
`;

export default function AllNews() {
    return (
        <div css={allNewsSyle}>
            <h1>News</h1>
            <NewsSearch />
            <NewsDisplay />
        </div>
    );
}