// components/Pages/internalPages/Dashboard/UniversalSearch.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const universalSearchStyle = css`
  border: 1px solid #ccc;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 1.2rem;
`;

const UniversalSearch = () => {
  return (
    <div css={universalSearchStyle}>
      <p>Universal Search</p>
    </div>
  );
};

export default UniversalSearch;
