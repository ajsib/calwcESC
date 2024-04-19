// components/Pages/internalPages/Dashboard/ProfileNav/ProfileCard.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const profileCardStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  width: 50%;
  height: 10rem;
`;

const ProfileCard = () => {
  return (
    <div css={profileCardStyle}>
      <p>Profile Card</p>
    </div>
  );
};

export default ProfileCard;
