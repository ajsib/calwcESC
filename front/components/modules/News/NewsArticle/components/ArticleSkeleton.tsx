/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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
  background-color: #e0e0e0;
`;

const skeletonDateStyle = css`
  width: 30%;
  height: 18px;
  margin-bottom: 20px;
  background-color: #e0e0e0;
`;

const skeletonDescriptionStyle = css`
  width: 80%;
  height: 18px;
  margin-bottom: 20px;
  background-color: #e0e0e0;
`;

const skeletonImageStyle = css`
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
  background-color: #e0e0e0;
`;

const skeletonContentStyle = css`
  width: 100%;
  height: 18px;
  margin-bottom: 10px;
  background-color: #e0e0e0;
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
