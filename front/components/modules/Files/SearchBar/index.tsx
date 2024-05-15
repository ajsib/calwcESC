/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SearchBarCon from "./components/SearchBarCon";

// Styling for the entire page
const fileSystemPageStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const SearchBar = () => {
    return (
        <div css={fileSystemPageStyle}>
            <SearchBarCon />
        </div>
    );
};

export default SearchBar;