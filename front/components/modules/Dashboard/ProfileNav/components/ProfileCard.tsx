/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Person as UserProfile } from '@/public/Types/GlobalTypes';
import { useUserProfile } from '@/globalContexts/userContext';

interface ProfileCardProps {
  user: UserProfile;
  rankImage?: string;
}

const profileImageSection = css`
  flex: 0 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ccc; // Grey background
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  font-weight: bold;
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

const nameStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

const rankStyle = css`
  font-size: 1rem;
  font-style: italic;
  color: #000;
`;

const departmentStyle = css`
  font-size: 1rem;
  color: #666; 
`;

const lastLoginStyle = css`
  padding-top: 2rem;
  font-size: 0.8rem;
  color: #333;
`;

const ProfileCard: React.FC<ProfileCardProps> = ({ user, rankImage }) => {

  const { profile } = useUserProfile();

  const profileCardStyle = css`
  display: flex;
  background: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  width: ${profile?.role === 'Client' ? '100%' : '50%'}; 
  height: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  &:hover {
    // box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1);
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 480px) {
    width: 90%;
    flex-direction: column;
  }
`;

  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join('');
    return initials;
  };

  return (
    <div css={profileCardStyle}>
      <div css={profileImageSection}>
        {getInitials(user.name)}
      </div>
      <div css={profileInfoSection}>
        <p css={nameStyle}>{user.name}</p>
        <p>
          <span css={rankStyle}>{user.rank}</span>
          <span css={departmentStyle}> | {user.department}</span>
        </p>
        <p className='caption' css={lastLoginStyle}>Last Login: {user.last_login}</p>
      </div>
      <div css={rankEpauletSection} style={{ backgroundImage: `url(${rankImage})` }} />
    </div>
  );
};

export default ProfileCard;
