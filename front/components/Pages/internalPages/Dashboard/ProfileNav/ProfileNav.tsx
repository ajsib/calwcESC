// components/Pages/internalPages/Dashboard/ProfileNav/ProfileNav.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ProfileCard from './ProfileCard';
import ModuleNavigation from './ModuleNavigation';

const profileNavContainer = css`
  display: flex;
  flex-direction: row;
  background: #FBFBFB;
  gap: 1rem;
  padding: 2rem;
`;

const ProfileNav = () => {
  return (
    <div css={profileNavContainer}>
      <ProfileCard />
      <ModuleNavigation />
    </div>
  );
};

export default ProfileNav;
