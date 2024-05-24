/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

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
  background-size: 800px 104px;
`;

const skeletonText = css`
  height: 20px;
  width: 100%;
  border-radius: 4px;
  ${skeletonAnimation};
`;

const skeletonCardStyle = css`
  display: flex;
  align-items: center;
  padding: 2.5rem;
  margin: 0.5rem 0;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const skeletonPhotoParentStyle = css`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  border-right: 1px solid black;
  height: 100%;
`;

const skeletonProfilePhotoStyle = css`
  width: 110px;
  height: 110px;
  background-color: #eee;
  border-radius: 50%;
  margin-right: 1.5rem;
  ${skeletonAnimation};
`;

const skeletonTextStyle = css`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const skeletonWedgeStyle = css`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
  width: 26px;
  height: 26px;
  ${skeletonAnimation};
`;

const SkeletonProfileCard = () => {
  return (
    <div css={skeletonCardStyle}>
      <div css={skeletonWedgeStyle}></div>
      <div css={skeletonPhotoParentStyle}>
        <div css={skeletonProfilePhotoStyle}></div>
      </div>
      <div css={skeletonTextStyle}>
        <div css={css`${skeletonText}; width: 60%;`}></div>
        <div css={css`${skeletonText}; width: 40%;`}></div>
        <div css={css`${skeletonText}; width: 80%;`}></div>
        <div css={css`${skeletonText}; width: 70%;`}></div>
        <div css={css`${skeletonText}; width: 50%;`}></div>
      </div>
    </div>
  );
};

export default SkeletonProfileCard;
