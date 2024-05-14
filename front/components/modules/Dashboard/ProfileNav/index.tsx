/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import ProfileContainer from './components/ProfileCon';
import ModuleNavigation from './components/Navigation';

const profileNavContainer = css`
  display: flex;
  flex-direction: row;
  background: #FBFBFB;
  gap: 1rem;
  padding: 2rem;
`;

const ProfileNavModule: React.FC = () => (
    <div css={profileNavContainer}>
      <ProfileContainer />
      <ModuleNavigation />
    </div>
);

export default ProfileNavModule;
