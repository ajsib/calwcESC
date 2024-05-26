/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardCon from './CardCon';
import { Person as Profile } from '@/public/Types/GlobalTypes';

const profilesListStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const ProfileCardsList = ({profiles} : {profiles: Profile[]}) => {
  return (
    <div css={profilesListStyle}>
      {profiles.map((profile, index) => (
        <CardCon
          key={index}
          profile={profile}
        />
      ))}
    </div>
  );
};

export default ProfileCardsList;
