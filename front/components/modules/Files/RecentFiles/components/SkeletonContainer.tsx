/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FileCardSkeleton from "./FileCardSkeleton";

const skeletonContainerStyle = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
`;

const SkeletonContainer = () => {
    return (
        <div css={skeletonContainerStyle}>
            <FileCardSkeleton />
            <FileCardSkeleton />
            <FileCardSkeleton />
            <FileCardSkeleton />
        </div>
    );
};

export default SkeletonContainer;