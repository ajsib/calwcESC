import ProfileCard from "./Card";
import { Person as Profile } from "@/public/Types/GlobalTypes";

const CardCon = ({ profile }: { profile: Profile }) => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  return (
    <ProfileCard
      profilePhoto={`${backendUrl}api/images/internal/avatar.png`}
      name={profile.name}
      rank={profile.rank}
      email={profile.email}
      department={profile.department}
      reportsTo={profile.report_to}
      id={profile.employee_id}
    />
  );
};

export default CardCon;
