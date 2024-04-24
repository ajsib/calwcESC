// components/SearchBar.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Filters from './Filters';

const searchBarStyle = css`
  display: flex;
  padding: 0.5rem;
  margin: 0.5rem 0;
  justify-content: space-between;
`;

const SearchBar = () => {
  return (
    <div css={searchBarStyle}>
      <input type="text" placeholder="Search bar" />
      <Filters />
    </div>
  );
};

export default SearchBar;
