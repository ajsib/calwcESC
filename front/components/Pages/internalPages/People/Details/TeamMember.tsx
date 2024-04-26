/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GeneralProfileCard from './ProfileCard';
import Tabs from './Tabs';
import TicketCards from './TicketCards';

const teamMemberStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

interface TeamMemberProps {
  profilePhoto: string;
  name: string;
  rank: string;
  email: string;
  department: string;
  reportsTo: string;
}

const TeamMember = ({ profilePhoto, name, rank, email, department, reportsTo }: TeamMemberProps) => {
  return (
    <div css={teamMemberStyle}>
      <GeneralProfileCard 
        profilePhoto={profilePhoto}
        name={name}
        rank={rank}
        email={email}
        department={department}
        reportsTo={reportsTo}
      />
      <Tabs />
      <TicketCards />
    </div>
  );
};

export default TeamMember;
