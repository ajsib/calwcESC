import { useState, useEffect } from "react";
import TicketCards from "./TicketCards";
import TicketCardSkeleton from "./TicketCardsSkeleton";
import { fetchTicketData, fetchTicketsByIds, fetchTicketIdsByUserId } from "../services/fetchTicketData";
import { Ticket } from "@/public/Types/GlobalTypes";
import { useUserProfile } from "@/globalContexts/userContext";

const TicketCardsCon = () => {
  const { profile } = useUserProfile();
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const loadTickets = async () => {
      if (profile?.role === "Staff") {
        try {
          const ticketIds = await fetchTicketIdsByUserId(profile.employee_id);
          const tickets = await fetchTicketsByIds(ticketIds);
          setTickets(tickets);
        } catch (error) {
          console.error("Error fetching tickets for Staff:", error);
        }
      } else if (profile?.role === "ESC Staff") {
        try {
          const tickets = await fetchTicketData();
          setTickets(tickets);
        } catch (error) {
          console.error("Error fetching tickets for ESC Staff:", error);
        }
      }
    };

    loadTickets();
  }, [profile]);

  if (tickets.length === 0) {
    return <TicketCardSkeleton />;
  }

  return <TicketCards tickets={tickets} />;
};

export default TicketCardsCon;
