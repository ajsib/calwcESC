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
`;

const cardSkeletonStyle = css`
  display: flex;
  align-items: center;
  padding: 2.5rem;
  margin: 0.5rem 0;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const textSkeletonStyle = css`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const photoParentSkeletonStyle = css`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  border-right: 1px solid black;
  height: 100%;
`;

const profilePhotoSkeletonStyle = css`
  width: 110px;
  height: 110px;
  background-color: #eee;
  border-radius: 50%;
  margin-right: 1.5rem;
  ${skeletonAnimation};
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

const rightWedgeSkeletonStyle = css`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
`;

const ProfileCardSkeleton = () => (
  <div css={cardSkeletonStyle}>
    <div css={rightWedgeSkeletonStyle}>
      {/* RightWedgeMedium would be skeleton animation */}
      <div css={skeletonText} style={{ width: '26px', height: '26px' }}></div>
    </div>
    <div css={photoParentSkeletonStyle}>
      <div css={profilePhotoSkeletonStyle}></div>
    </div>
    <div css={textSkeletonStyle}>
      <div css={skeletonLongText}></div>
      <div css={skeletonShortText}></div>
      <div css={skeletonShortText}></div>
      <div css={skeletonShortText}></div>
      <div css={skeletonShortText}></div>
    </div>
  </div>
);

export default ProfileCardSkeleton;
