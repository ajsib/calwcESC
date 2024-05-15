import Header from "@/components/Shared/Internal/Header/Header";
import Stats from "@/components/modules/Tickets/Stats";
import TicketCards from "@/components/modules/Tickets/TicketCards";

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