/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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
    background-color: #E0E0E0;
    margin-bottom: 2rem;
    margin-left: 16px;
    margin-top: 16px;
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
    background-color: #E0E0E0;
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
