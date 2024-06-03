import TicketCards from "./TicketCards";
import TicketCardSkeleton from "./TicketCardsSkeleton";
import { useTicketContext } from "../../TicketContext";

const TicketCardsCon = () => {
  const { filteredTickets } = useTicketContext();

  if (filteredTickets.length === 0) {
    return <TicketCardSkeleton />;
  }

  return <TicketCards tickets={filteredTickets} />;
};

export default TicketCardsCon;
