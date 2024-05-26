import Header from "@/components/modules/shared/Header/Header";
import Stats from "@/components/modules/Tickets/Stats";
import TicketCards from "@/components/modules/Tickets/TicketCards";
import { useAuth } from "@/globalContexts/authContext";
import { useUserProfile } from "@/globalContexts/userContext";

const TicketsPage = () => {
  const { loggedIn } = useAuth();
  const { profile } = useUserProfile();
  if (!loggedIn || !profile) {
    return <div>Either you&apos;re not logged in or you don&apos;t have a profile.</div>;
  }

  return (
    <>
      <Header />
      <Stats />
      <TicketCards />
    </>
  );
};

export default TicketsPage;