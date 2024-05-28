import Details from "@/components/modules/People/Details";
import { useAuth } from "@/globalContexts/authContext";
import { useUserProfile } from "@/globalContexts/userContext";

const TeamMemberPage = () => {
  const { loggedIn } = useAuth();
  const { profile } = useUserProfile();
  if (!loggedIn || !profile || profile.role === "Client") {
      return <div>Either you&apos;re not logged in or you don&apos;t have a profile.</div>;
    }
  return(
    <div>
      <Details/>
    </div>
  )

}

export default TeamMemberPage