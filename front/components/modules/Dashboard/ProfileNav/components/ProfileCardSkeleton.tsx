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

// Existing styles modified for skeleton
const profileCardStyle = css`
  display: flex;
  background: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  width: 50%;
  height: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 480px) {
    width: 90%;
    flex-direction: column;
  }
`;

const profileImageSection = css`
  flex: 0 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #eee;
  background-size: cover;
  background-position: center;
`;

const profileInfoSection = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
`;

const rankEpauletSection = css`
  flex: 0 0 auto;
  width: auto;
  height: 100px;
  aspect-ratio: 1;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const skeletonText = css`
  height: 16px;
  width: 80%;
  margin: 8px 0;
  ${skeletonAnimation};
`;

const skeletonProfileImage = css`
  ${profileImageSection}
  ${skeletonAnimation};
`;

const skeletonRankImage = css`
  ${rankEpauletSection}
  ${skeletonAnimation};
`;

const ProfileCardSkeleton = () => (
  <div css={profileCardStyle}>
    <div css={skeletonProfileImage} />
    <div css={profileInfoSection}>
      <div css={skeletonText}></div>
      <div css={skeletonText} style={{ width: '60%' }}></div>
      <div css={skeletonText} style={{ width: '50%' }}></div>
    </div>
    <div css={skeletonRankImage} />
  </div>
);

export default ProfileCardSkeleton;
