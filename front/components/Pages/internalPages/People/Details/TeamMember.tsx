/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GeneralProfileCard from './ProfileCard';
import Tabs from './Tabs';
import CardDisplay from './CardDisplay';
import { Profile } from '@/components/Shared/Types/types';
import { useState } from 'react';

const teamMemberStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const TeamMember = ({ profilePhoto, name, rank, email, department, reportsTo, id }: Profile) => {
  const [selectedTab, setSelectedTab] = useState('All');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

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
      <Tabs handleTabClick={handleTabClick} />
      <CardDisplay selectedTab={selectedTab} />
    </div>
  );
};

export default TeamMember;
