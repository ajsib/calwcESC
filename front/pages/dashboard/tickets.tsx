// pages/dashboard/tickets.tsx
import Header from "@/components/Shared/Internal/Header/Header";
import Stats from "@/components/Pages/internalPages/Tickets/Stats";
import TicketCards from "@/components/Pages/internalPages/Tickets/TicketCards";

const TicketsPage = () => {
  return (
    <>
      <Header />
      <Stats />
      <TicketCards />
    </>
  );
};

export default TicketsPage;
