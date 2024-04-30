// components/Pages/internalPages/Dashboard/ProfileNav/ProfileCard.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const profileCardStyle = css`
  display: flex;
  background: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  width: 50%;
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

const profileImageSection = css`
  flex: 0 0 auto;
  width: 100px; // Adjust the width as needed
  height: 100px; // Adjust the height as needed
  border-radius: 50%;
  background: #eee; // Placeholder color
  // Placeholder for profile image
  background-image: url('/path/to/default-avatar.jpg');
  background-size: cover;
  background-position: center;
`;

const profileInfoSection = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
`;


const rankEpauletSection = css`
  flex: 0 0 auto;
  width: auto;
  height: 100px;
  aspect-ratio: 1;
  // background: #ddd; // Placeholder color

  // Placeholder for epaulet image
  background-image: url('/images/internal/ranks/captain.png');
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
  color: #666; // Department is gray
`;

const lastLoginStyle = css`
  padding-top: 2rem;
  font-size: 0.8rem;
  color: #333;
`;

const ProfileCard = () => {
  return (
    <div css={profileCardStyle}>
      <div css={profileImageSection} />
      <div css={profileInfoSection}>
        <p css={nameStyle}>First Last Name</p>
        <p>
           <span css={rankStyle}>Captain</span>
           <span css={departmentStyle}> | Department</span>
        </p>
        {/* <p css={emailStyle}>user@example.com</p> */}
        <p className='caption' css={lastLoginStyle}>Last Login: 27 Apr 2024, 1000 hours</p>
      </div>
      <div css={rankEpauletSection} />
    </div>
  );
};

export default ProfileCard;
