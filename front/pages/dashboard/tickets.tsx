import Header from "@/components/Shared/Internal/Header/Header";
import Stats from "@/components/Pages/internalPages/Tickets/Stats";
import TicketCards from "@/components/Pages/internalPages/Tickets/TicketCards";
import ticketsData from "./tickets-dummy.json";

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