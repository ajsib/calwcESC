import Header from "@/components/modules/shared/Header/Header";
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