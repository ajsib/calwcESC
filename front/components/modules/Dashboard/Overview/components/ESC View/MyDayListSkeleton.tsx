/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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
