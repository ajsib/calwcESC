/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from "@/components/modules/shared/Header/Header";
import Stats from "@/components/modules/Tickets/Stats";
import TicketCards from "@/components/modules/Tickets/TicketCards";
import NewTicket from "@/components/modules/Tickets/NewTicket";
import SearchBar from "@/components/modules/Tickets/SearchBar";
import { useAuth } from "@/globalContexts/authContext";
import { useUserProfile } from "@/globalContexts/userContext";
import { TicketProvider, useTicketContext } from "@/components/modules/Tickets/TicketContext";

const containerStyle = css`
  background-color: #E9E9E9;
`;

const TicketsContent = () => {
  const { isTicketEntryPageOpen } = useTicketContext();

  if (isTicketEntryPageOpen) {
    return <NewTicket />;
  }

  return (
    <div css={containerStyle}>
      <Stats />
      <SearchBar />
      <TicketCards />
    </div>
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
