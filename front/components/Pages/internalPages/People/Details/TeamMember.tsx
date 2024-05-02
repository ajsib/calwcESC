/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GeneralProfileCard from './ProfileCard';
import Tabs from './Tabs';
import TicketCards from './TicketCards';
import { Profile } from '@/components/Shared/Types/types';

const teamMemberStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const TeamMember = ({ profilePhoto, name, rank, email, department, reportsTo, id }: Profile) => {
  return (
    <div css={teamMemberStyle}>
      <GeneralProfileCard 
        profilePhoto={profilePhoto}
        name={name}
        rank={rank}
        email={email}
        department={department}
        reportsTo={reportsTo}
        id={id}
      />
      <Tabs />
      <TicketCards />
    </div>
  );
};

export default TeamMember;
