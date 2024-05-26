import TicketView from "@/components/modules/Tickets/TicketView";
import { useAuth } from "@/globalContexts/authContext";
import { useUserProfile } from "@/globalContexts/userContext";

const Ticket = () => {
    const { loggedIn } = useAuth();
    const { profile } = useUserProfile();
    if (!loggedIn || !profile || profile.role === "Client") {
        return <div>Either you&apos;re not logged in or you don&apos;t have a profile.</div>;
      }
    return (
        <div>
            <TicketView />
        </div>
    )
}

export default Ticket;