/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import ProfileDisplay from './ProfileCardDisplay';
import { Person as Profile } from '@/public/Types/GlobalTypes';

const generalProfileCardStyle = css`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  margin: 0.5rem 0;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  width: 100%;
`;

const GeneralProfileCard = ({ profile }: { profile: Profile }) => {

  return (
    <div css={generalProfileCardStyle}>
        <ProfileDisplay profile={profile} />
    </div>
  );
};

export default GeneralProfileCard;
