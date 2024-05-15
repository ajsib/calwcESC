/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SearchResult from '../Types';

const SearchResultsStyle = css`
border: 1px solid #ccc;
margin: 2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
line-height: 2rem;
flex-grow: 1;
`;


const SearchResults = ({results}: SearchResult) => {
    return (
        <div css={SearchResultsStyle}>
        <p>Search Results</p>
        <p>{results}</p>
        </div>
    );
};

export default SearchResults;