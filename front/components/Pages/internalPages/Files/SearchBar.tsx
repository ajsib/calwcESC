/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const searchBarStyle = css`
  border: 1px solid #ccc;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #fff;
  width: 100%;
`;

const inputStyle = css`
  border: none;
  outline: none;
  margin-left: 1rem;
  width: 90%;
`;

const SearchBar = () => {
  return (
    <div css={searchBarStyle}>
      <input css={inputStyle} type="text" placeholder="Search files" />
    </div>
  );
};

export default SearchBar;
