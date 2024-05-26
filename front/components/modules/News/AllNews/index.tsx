/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NewsSearchCon from './components/NewsSearchCon';
import NewsDisplayCon from './components/NewsDisplayCon';


const allNewsSyle = css`
    margin-top: 5rem;
    margin-left: var(--margin);
    margin-right: var(--margin);
`;

export default function NewsPage() {
    return (
        <div css={allNewsSyle}>
            <h1>News</h1>
            <NewsSearchCon />
            <NewsDisplayCon />
        </div>
    );
}