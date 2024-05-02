/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ProfileCard from './Card';
import dummyProfiles from '@/components/Shared/API/Data/profiles-dummy.json';

const profilesListStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const ProfileCardsList = () => {
  return (
    <div css={profilesListStyle}>
      {dummyProfiles.map((profile, index) => (
        <ProfileCard
          key={index}
          profilePhoto={profile.profilePhoto}
          name={profile.name}
          rank={profile.rank}
          email={profile.email}
          department={profile.department}
          reportsTo={profile.reportsTo}
        />
      ))}
    </div>
  );
};

export default ProfileCardsList;
