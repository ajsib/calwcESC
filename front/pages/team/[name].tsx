// pages/team/[name].tsx
import { useRouter } from 'next/router';
import { useTeamMember } from '../../contexts/TeamMemberContext';
import TeamMember from '@/components/Pages/internalPages/People/Details/TeamMember';

const TeamMemberPage = () => {
  const router = useRouter();
  const { teamMember } = useTeamMember() || {}; // Use empty object as fallback
  
  if (!teamMember) {
    // Handle the case where there is no team member data (redirect, show a message, etc.)
    return <div>No team member data available</div>;
  }

  return (
    <TeamMember {...teamMember} />
  );
};

export default TeamMemberPage;
