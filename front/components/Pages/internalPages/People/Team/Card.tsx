/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import { useTeamMember } from '@/contexts/TeamMemberContext';
import RightWedgeMedium from '@/components/UI/arrows/RightWedgeMedium';

interface ProfileCardProps {
  profilePhoto: string;
  name: string;
  rank: string;
  email: string;
  department: string;
  reportsTo: string;
}

const cardStyle = css`
  display: flex;
  align-items: center;
  padding: 2.5rem;
  margin: 0.5rem 0;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: relative; /* Make the card position relative for absolute positioning of RightWedgeBold */
  transition: transform 0.3s ease;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    svg {
      transform: translateX(5px);
    }
  }
  svg {
    position: absolute;
    top: 8%;
    right: 1%;
    transition: transform 0.3s ease; /* Smooth transition */
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

const linkStyle = css`
  text-decoration: none;
  color: inherit;
`;

const ProfileCard = ({ profilePhoto, name, rank, email, department, reportsTo }: ProfileCardProps) => {
  const teamMemberContext = useTeamMember()!;
  const { setTeamMember } = teamMemberContext;

  const handleClick = () => {
    setTeamMember({ profilePhoto, name, rank, email, department, reportsTo });
  };

  return (
    <Link css={linkStyle} href={`/team/${encodeURIComponent(name)}`} passHref>
        <div css={cardStyle} onClick={handleClick}>
          <RightWedgeMedium size={21} />
          <div css={photoParentStyle}>
            <div css={profilePhotoStyle} style={{ backgroundImage: `url(${profilePhoto})`, backgroundSize: 'cover' }}></div>
          </div>
          <div css={textStyle}>
            <div css={nameStyle}>{name}</div>
            <div css={rankStyle}>{rank}</div>
            <div css={emailStyle}>{email}</div>
            <div css={departmentStyle}>{department}</div>
            <div css={reportsToStyle}>Reports to: {reportsTo}</div>
          </div>
        </div>
    </Link>
  );
};

export default ProfileCard;
