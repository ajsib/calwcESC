// components/Pages/internalPages/Dashboard/ModulePreview.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const modulePreviewStyle = css`
  border: 1px solid #ccc;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 2rem;
  flex-grow: 1;
`;

const ModulePreview = () => {
  return (
    <div css={modulePreviewStyle}>
      <p>Daily Overview of jobs to be done</p>
      <p>When searching, will be replaced with search results</p>
    </div>
  );
};

export default ModulePreview;
