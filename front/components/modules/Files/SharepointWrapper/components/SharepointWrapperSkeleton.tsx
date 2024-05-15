/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

// Define the keyframes for the skeleton loading animation
const loading = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

// CSS for the skeleton animation
const skeletonAnimation = css`
  animation: ${loading} 1.5s infinite linear;
`;

const lightGradient = css`
  ${skeletonAnimation};
  background: linear-gradient(to right, #eee 8%, #ddd 18%, #eee 33%);
`;

const darkGradient = css`
  ${skeletonAnimation};
  background: linear-gradient(to right, #e0e0e0 8%, #c0c0c0 18%, #e0e0e0 33%);
`;

const SharepointWrapperStyle = css`
  border: 1px solid #ccc;
  overflow-x: auto;
  margin-top: 1rem;
`;

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;

  @media (max-width: 768px) {
    min-width: 0;
  }
`;

const thStyle = css`
  background-color: #dcdcdc;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const tdStyle = css`
  padding: 10px;
`;

const trStyle = css`
  &:nth-child(even) td {
    ${darkGradient}; // Apply dark gradient for even rows
  }

  &:nth-child(odd) td {
    ${lightGradient}; // Apply light gradient for odd rows
  }

  &:hover {
    background-color: #eaeaea;
  }
`;

const responsiveThStyle = css`
  ${thStyle};
  @media (max-width: 768px) {
    padding: 10px 5px;
  }
`;

// Skeleton component rendering 5 rows
const SharepointSkeleton = () => {
  return (
    <div css={SharepointWrapperStyle}>
      <table css={tableStyle}>
        <thead>
          <tr>
            <th css={responsiveThStyle}>File Name</th>
            <th css={responsiveThStyle}>File Type</th>
            <th css={responsiveThStyle}>Creator</th>
            <th css={responsiveThStyle}>Date Added</th>
            <th css={responsiveThStyle}>Date Modified</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index} css={trStyle}>
              <td css={tdStyle}></td>
              <td css={tdStyle}></td>
              <td css={tdStyle}></td>
              <td css={tdStyle}></td>
              <td css={tdStyle}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SharepointSkeleton;
