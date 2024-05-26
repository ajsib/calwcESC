/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const profilePhotoSkeletonStyle = css`
  width: 150px;
  height: 150px;
  background-color: #eee;
  border-radius: 50%;
  margin: 0 1.5rem;
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
