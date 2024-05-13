import Header from "@/components/Shared/Internal/Header/Header";
import Stats from "@/components/modules/Tickets/Stats";
import TicketCards from "@/components/modules/Tickets/TicketCards";
import ticketsData from "@/components/Shared/API/Data/tickets-dummy.json";

const TicketsPage = () => {
  return (
    <>
      <Header />
      <Stats tickets={ticketsData} />
      <TicketCards tickets={ticketsData} />
    </>
  );
};

export default TicketsPage;