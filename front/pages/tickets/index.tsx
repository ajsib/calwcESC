import Header from "@/components/modules/shared/Header/Header";
import Stats from "@/components/modules/Tickets/Stats";
import TicketCards from "@/components/modules/Tickets/TicketCards";
import { useAuth } from "@/globalContexts/authContext";
import { useUserProfile } from "@/globalContexts/userContext";
import { TicketProvider } from "@/components/modules/Tickets/TicketContext";

const TicketsPage = () => {
  const { loggedIn } = useAuth();
  const { profile } = useUserProfile();
  if (!loggedIn || !profile || profile.role === "Client") {
    return <div>Either you&apos;re not logged in or you don&apos;t have a profile.</div>;
  }

  return (
    <>
      <Header />
      <TicketProvider>
        <Stats />
        <TicketCards />
      </TicketProvider>
    </>
  );
};

export default TicketsPage;