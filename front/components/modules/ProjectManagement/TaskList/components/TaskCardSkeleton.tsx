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
  animation: ${loading} 1s infinite linear;
  background: linear-gradient(to right, #eee 8%, #ddd 18%, #eee 33%);
  background-size: 200% 100%;
`;

// Skeleton styles based on TaskCard styles
const taskCardSkeletonStyle = css`
  border: 1.5px solid #dadada;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const avatarSkeletonStyle = css`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #ccc;
  ${skeletonAnimation};
  margin-right: 1rem;
`;

const taskTitleSkeletonStyle = css`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 0.5rem;
`;

const skeletonText = css`
  height: 16px;
  ${skeletonAnimation};
`;

const skeletonShortText = css`
  width: 50%;
  ${skeletonText};
`;

const skeletonLongText = css`
  width: 80%;
  ${skeletonText};
`;

const actionButtonsSkeletonStyle = css`
  display: flex;
  align-items: center;
`;

const TaskCardSkeleton = () => (
  <div css={taskCardSkeletonStyle}>
    <div css={avatarSkeletonStyle}></div>
    <div css={taskTitleSkeletonStyle}>
      <div css={skeletonLongText}></div>
      <div css={skeletonShortText}></div>
    </div>
    <div css={actionButtonsSkeletonStyle}>
      <div css={skeletonShortText} style={{ marginRight: '0.5rem' }}></div>
      <div css={skeletonShortText} style={{ width: '1rem' }}></div>
    </div>
  </div>
);

export default TaskCardSkeleton;
