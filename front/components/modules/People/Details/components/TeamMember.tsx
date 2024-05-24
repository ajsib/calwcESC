/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GeneralProfileCard from './ProfileCon';
import Tabs from './Tabs';
import CardDisplayCon from './CardDisplayCon';
import { Profile } from '../../Types';
import { useState } from 'react';

const teamMemberStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const TeamMember = ({ teamMember }: { teamMember: Profile }) => {
  const [selectedTab, setSelectedTab] = useState('All');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div css={teamMemberStyle}>
      <GeneralProfileCard profile={teamMember} />
      <Tabs handleTabClick={handleTabClick} />
      <CardDisplayCon selectedTab={selectedTab} />
    </div>
  );
};

export default TeamMember;
