/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ProfileContainer from './components/ProfileCon';
import ModuleNavigation from './components/Navigation';
import { useUserProfile } from '@/globalContexts/userContext';

const profileNavContainer = css`
  display: flex;
  flex-direction: row;
  background: #FBFBFB;
  gap: 1rem;
  padding: 2rem;
  padding-bottom: 4rem;
`;

const ProfileNavModule = () => {
  const { profile } = useUserProfile();
  if (!profile) {
    return null;
  }
  return (
    <div css={profileNavContainer}>
      <ProfileContainer />
      { profile.role !== 'Client' && <ModuleNavigation />}
    </div>
  );
};

export default ProfileNavModule;
