// components/modules/People/Details.tsx
import TeamMember from "./components/TeamMember";
import { useTeamMember } from "../TeamMemberContext";

const Details = () => {
  const { teamMember } = useTeamMember() || {}; // Use empty object as fallback

  console.log("Details teamMember:", teamMember); // Debug log

  if (!teamMember) {
    // Handle the case where there is no team member data (redirect, show a message, etc.)
    return <div>No team member data available</div>;
  }

  return <TeamMember teamMember={teamMember} />; // Pass as a single prop
};

export default Details;
