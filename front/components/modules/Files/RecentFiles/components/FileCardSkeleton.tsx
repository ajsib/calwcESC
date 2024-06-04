/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

// Keyframes and animation style for the skeleton loading
const loading = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const skeletonAnimation = css`
  animation: ${loading} 1.5s infinite linear;
  background: linear-gradient(to right, #eee 8%, #ddd 18%, #eee 33%);
  background-size: 200% 100%;
`;

// CSS for the FileCard component modified for skeleton
const fileCardSkeletonStyle = css`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${skeletonAnimation}; // Apply the animation

  &:hover {
    cursor: pointer;
    background-color: #f5f5f5;
    border-color: #999;
    transition: all 0.3s ease;
    transform: translateY(-1px);
  }
`;

// Skeleton FileCard component
const FileCardSkeleton = () => {
  return (
    <div css={fileCardSkeletonStyle}>
      &nbsp;
    </div>
  );
};

export default FileCardSkeleton;
