/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Person as Profile } from '@/public/Types/GlobalTypes';

// Provided styles
const profilePhotoStyle = css`
  width: 150px;
  height: 150px;
  background-color: #eee;
  border-radius: 50%;
  margin: 0 1.5rem;
  background-size: cover;
  background-position: center;
`;

const photoParentStyle = css`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  border-right: 1px solid black;
  height: 100%;
`;

const textParentStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const nameStyle = css`
  font-weight: bold;
  font-size: 1.5rem;
`;

const rankStyle = css`
  font-size: 1.2rem;
`;

const emailStyle = css`
  font-size: 1rem;
`;

const departmentStyle = css`
  font-size: 1rem;
`;

const reportsToStyle = css`
  font-size: 1rem;
`;

const ProfileDisplay = ({ profile }: { profile: Profile }) => {
  const { name, rank, email, department, report_to } = profile;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  return (
    <>
      <div css={photoParentStyle}>
        <div css={profilePhotoStyle} style={{ backgroundImage: `url(${backendUrl}api/images/internal/avatar.png)` }}></div>
      </div>
      <div css={textParentStyle}>
        <span css={nameStyle}>{name}</span>
        <span css={rankStyle}>{rank}</span>
        <span css={emailStyle}>{email}</span>
        <span css={departmentStyle}>{department}</span>
        <span css={reportsToStyle}>Reports to: {report_to}</span>
      </div>
    </>
  );
};

export default ProfileDisplay;
