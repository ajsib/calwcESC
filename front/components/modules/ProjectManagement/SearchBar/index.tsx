/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const commonContainerStyle = css`
    margin: 2rem var(--margin);
    width: calc(100% - 2 * var(--margin));
    left: 0;
    top: 0;
    bottom: 0;
    max-width: calc(100% - 682px);
    width: 100%;
    margin-top: -2rem;
    margin-left: 32px;
`;
import SearchBarCon from "./components/SearchBarCon";

const SearchBar = () => {
  return (
    <div css={commonContainerStyle}>
      <SearchBarCon />
    </div>
  );
};

export default SearchBar;