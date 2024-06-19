import { useAuth } from "@/globalContexts/authContext";
import { useUserProfile } from "@/globalContexts/userContext";
import Header from "@/components/modules/shared/Header/Header";
import Intake from "@/components/modules/Intake";

const TicketIntake = () => {
    const { loggedIn } = useAuth();
    const { profile } = useUserProfile();
    if (!loggedIn || !profile) {
        return <div>Either you&apos;re not logged in or you don&apos;t have a profile.</div>;
      }
    return (
        <div>
            <Header />
            <Intake />
        </div>
    );
};

export default TicketIntake;