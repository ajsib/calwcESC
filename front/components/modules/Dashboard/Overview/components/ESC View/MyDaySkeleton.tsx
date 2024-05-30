/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

// Keyframe animation for the skeleton
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

const skeletonContainer = css`
    height: calc(100vh - 320px);
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: #FDFDFD;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
`;

const skeletonTitle = css`
    width: 50%;
    height: 2rem;
    margin-bottom: 2rem;
    margin-left: 16px;
    margin-top: 16px;
    ${skeletonAnimation};
`;

const skeletonContent = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const skeletonCard = css`
    background-color: #F5F5F5;
    padding: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const skeletonLine = css`
    width: 100%;
    height: 1.5rem;
    ${skeletonAnimation};
`;

const MyDaySkeleton = () => {
    return (
        <div css={skeletonContainer}>
            <div css={skeletonTitle}></div>
            <div css={skeletonContent}>
                <div css={skeletonCard}>
                    <div css={skeletonLine}></div>
                    <div css={skeletonLine}></div>
                </div>
                <div css={skeletonCard}>
                    <div css={skeletonLine}></div>
                    <div css={skeletonLine}></div>
                </div>
            </div>
        </div>
    );
};

export default MyDaySkeleton;
