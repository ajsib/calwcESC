/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import RightWedgeMedium from '@/components/UI/arrows/RightWedgeMedium';
import { ProfileCardProps } from '../Types';

const cardStyle = css`
  display: flex;
  align-items: center;
  padding: 2.5rem;
  margin: 0.5rem 0;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Reduced box-shadow */
  position: relative;
  transition: transform 0.3s ease;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

const textStyle = css`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const photoParentStyle = css`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  border-right: 1px solid black;
  height: 100%;
`;

const profilePhotoStyle = css`
  width: 110px;
  height: 110px;
  background-color: #eee;
  border-radius: 50%;
  margin-right: 1.5rem;
`;

const nameStyle = css`
  font-weight: bold;
  font-size: 1.7rem; /* Increased font size */
  line-height: 2.2rem; /* Adjusted line height */
`;

const rankStyle = css`
  font-size: 1.4rem; /* Adjusted font size */
  font-weight: bold; /* Added font weight */
`;

const emailStyle = css`
  font-size: 1rem; /* Adjusted font size */
  color: #666; /* Added color */
`;

const departmentStyle = css`
  font-size: 1.1rem; /* Adjusted font size */
  color: #666; /* Added color */
`;

const reportsToStyle = css`
  font-size: 1.1rem; /* Adjusted font size */
  color: #666; /* Added color */
`;

const linkStyle = css`
  text-decoration: none;
  color: inherit;
`;

const rightWedgeStyle = css`
  position: absolute;
  top: 50%;
  right: 1.5rem; /* Adjusted position */
  transform: translateY(-50%); /* Centered on the y-axis */
`;

const ProfileCard = ({ profilePhoto, name, rank, email, department, reportsTo, id, onClick }: ProfileCardProps) => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  return (
    <Link css={linkStyle} href={`/team/${encodeURIComponent(name)}`} passHref>
      <div css={cardStyle} onClick={onClick}>
        <div css={rightWedgeStyle}>
          <RightWedgeMedium size={26} /> {/* Adjusted size */}
        </div>
        <div css={photoParentStyle}>
          <div css={profilePhotoStyle} style={{ backgroundImage: `url(${backendUrl + profilePhoto})`, backgroundSize: 'cover' }}></div>
        </div>
        <div css={textStyle}>
          <div css={nameStyle}>{name}</div>
          <div css={rankStyle}>{rank}</div>
          <div css={departmentStyle}>{department}</div>
          <div css={reportsToStyle}>Reports to: {reportsTo}</div>
          <div css={emailStyle}>{email}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
