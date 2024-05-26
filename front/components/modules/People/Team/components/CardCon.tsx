import ProfileCard from "./Card";
import { Profile } from "../../Types";

const CardCon = ({ profile }: { profile: Profile }) => {

  return (
    <ProfileCard
      profilePhoto={profile.profilePhoto}
      name={profile.name}
      rank={profile.rank}
      email={profile.email}
      department={profile.department}
      reportsTo={profile.reportsTo}
      id={profile.id}
    />
  );
};

export default CardCon;
