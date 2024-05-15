/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const commonContainerStyle = css`
  margin: 2rem var(--margin);
  width: calc(100% - 2 * var(--margin));
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