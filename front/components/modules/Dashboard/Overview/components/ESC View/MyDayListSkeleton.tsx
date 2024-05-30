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

const skeletonListContainer = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    background-color: #F9F9F9;
    box-sizing: border-box;
`;

const skeletonTopSection = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #F5F5F5;
    padding: 1rem;
`;

const skeletonTab = css`
    width: 30%;
    height: 1.5rem;
    background-color: #E0E0E0;
    ${skeletonAnimation};
`;

const skeletonMessageSection = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F9F9F9;
    padding: 2rem;
    box-sizing: border-box;
`;

const skeletonMessageLine = css`
    width: 70%;
    height: 1.5rem;
    background-color: #E0E0E0;
    margin-bottom: 1rem;
    ${skeletonAnimation};
`;

const MyDayListSkeleton = () => {
    return (
        <div css={skeletonListContainer}>
            <div css={skeletonTopSection}>
                <div css={skeletonTab}></div>
                <div css={skeletonTab}></div>
                <div css={skeletonTab}></div>
            </div>
            <div css={skeletonMessageSection}>
                <div css={skeletonMessageLine}></div>
                <div css={skeletonMessageLine}></div>
                <div css={skeletonMessageLine}></div>
            </div>
        </div>
    );
};

export default MyDayListSkeleton;
