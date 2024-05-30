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

const profilePhotoSkeletonStyle = css`
  width: 150px;
  height: 150px;
  background-color: #eee;
  border-radius: 50%;
  margin: 0 1.5rem;
  ${skeletonAnimation};
`;

const photoParentSkeletonStyle = css`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  border-right: 1px solid black;
  height: 100%;
`;

const textParentSkeletonStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const skeletonTextStyle = css`
  height: 1.5rem;
  background-color: #eee;
  ${skeletonAnimation};
`;

const SkeletonProfile = () => {
  return (
    <>
      <div css={photoParentSkeletonStyle}>
        <div css={profilePhotoSkeletonStyle}></div>
      </div>
      <div css={textParentSkeletonStyle}>
        <div css={[skeletonTextStyle, { width: '40%' }]}></div>
        <div css={[skeletonTextStyle, { width: '30%' }]}></div>
        <div css={[skeletonTextStyle, { width: '50%' }]}></div>
        <div css={[skeletonTextStyle, { width: '60%' }]}></div>
        <div css={[skeletonTextStyle, { width: '70%' }]}></div>
      </div>
    </>
  );
};

export default SkeletonProfile;
