/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GeneralProfileCard from './ProfileCon';
import Tabs from './Tabs';
import CardDisplayCon from './CardDisplayCon';
import { Profile } from '../../Types';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchPersonData } from '../services/fetchPersonsStuff';
import SkeletonProfile from './ProfileCardSkeleton';

const teamMemberStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const TeamMember = () => {
  const [selectedTab, setSelectedTab] = useState('All');
  const [teamMember, setTeamMember] = useState<Profile | null>(null);
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    if (name) {
      fetchPersonData(name as string).then(data => {
        setTeamMember(data);
      }).catch(error => {
        console.error("Error fetching person data:", error);
      });
    }
  }, [name]);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  if (!teamMember) {
    return (
      <div css={teamMemberStyle}>
        <SkeletonProfile />
        <Tabs handleTabClick={handleTabClick} />
        <CardDisplayCon selectedTab={selectedTab} />
      </div>
    )
  }

  return (
    <div css={teamMemberStyle}>
      <GeneralProfileCard profile={teamMember} />
      <Tabs handleTabClick={handleTabClick} />
      <CardDisplayCon selectedTab={selectedTab} />
    </div>
  );
};

export default TeamMember;
