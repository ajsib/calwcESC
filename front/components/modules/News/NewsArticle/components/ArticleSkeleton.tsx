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
  background: linear-gradient(to right, #eee 8%, #ddd 18%, #eee 33%);
  background-size: 200% 100%;
`;

const skeletonStyle = css`
  font-family: "Segoe UI", Arial, sans-serif;
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const skeletonTitleStyle = css`
  width: 60%;
  height: 32px;
  margin: 100px 0 10px 0;
  ${skeletonAnimation};
`;

const skeletonDateStyle = css`
  width: 30%;
  height: 18px;
  margin-bottom: 20px;
  ${skeletonAnimation};
`;

const skeletonDescriptionStyle = css`
  width: 80%;
  height: 18px;
  margin-bottom: 20px;
  ${skeletonAnimation};
`;

const skeletonImageStyle = css`
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
  ${skeletonAnimation};
`;

const skeletonContentStyle = css`
  width: 100%;
  height: 18px;
  margin-bottom: 10px;
  ${skeletonAnimation};
  &:nth-of-type(even) {
    width: 90%;
  }
`;

const SkeletonArticle = () => {
  return (
    <div css={skeletonStyle}>
      <div css={skeletonTitleStyle}></div>
      <div css={skeletonDateStyle}></div>
      <div css={skeletonDescriptionStyle}></div>
      <div css={skeletonImageStyle}></div>
      <div css={skeletonContentStyle}></div>
      <div css={skeletonContentStyle}></div>
      <div css={skeletonContentStyle}></div>
      <div css={skeletonContentStyle}></div>
      <div css={skeletonContentStyle}></div>
    </div>
  );
};

export default SkeletonArticle;
