/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NewsSearch from './NewsSearch';


const allNewsSyle = css`
    margin: 1rem;
`;

export default function AllNews() {
    return (
        <div css={allNewsSyle}>
            <h1>News</h1>
            <NewsSearch />
        </div>
    );
}