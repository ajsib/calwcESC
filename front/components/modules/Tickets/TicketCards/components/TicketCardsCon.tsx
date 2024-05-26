import {useState, useEffect} from "react";
import TicketCards from "./TicketCards";
import TicketCardSkeleton from "./TicketCardsSkeleton";
import fetchTicketData from "../services/fetchTicketData";
import { Ticket } from "@/public/Types/GlobalTypes";

const TicketCardsCon = () => {
    const [tickets, setTickets] = useState<Ticket[]>([]);

    useEffect(() => {
        fetchTicketData().then((data) => {
            setTickets(data);
        });
    }, []);


  if(tickets.length === 0) {
    return <TicketCardSkeleton />;
  }
  return <TicketCards tickets={tickets} />;
}

export default TicketCardsCon;