// components/Pages/internalPages/Dashboard/ProfileNav/ProfileNav.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ProfileCard from './ProfileCard';
import ModuleNavigation from './ModuleNavigation';

const profileNavContainer = css`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ccc;
  margin: 2rem;
  gap: 1rem;
  padding-bottom: 2rem;
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
