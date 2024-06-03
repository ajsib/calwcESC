import Header from "@/components/modules/shared/Header/Header";
import Stats from "@/components/modules/Tickets/Stats";
import TicketCards from "@/components/modules/Tickets/TicketCards";
import NewTicket from "@/components/modules/Tickets/NewTicket";
import { useAuth } from "@/globalContexts/authContext";
import { useUserProfile } from "@/globalContexts/userContext";
import { TicketProvider, useTicketContext } from "@/components/modules/Tickets/TicketContext";

const TicketsContent = () => {
  const { isTicketEntryPageOpen } = useTicketContext();

  if (isTicketEntryPageOpen) {
    return <NewTicket />;
  }

  return (
    <>
      <Stats />
      <TicketCards />
    </>
  );
};

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
        <TicketsContent />
      </TicketProvider>
    </>
  );
};

export default TicketsPage;
