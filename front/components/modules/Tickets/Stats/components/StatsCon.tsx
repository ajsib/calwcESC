import { useState, useEffect } from "react";
import Stats from "./Stats";
import { fetchTicketIdsByUserId, fetchTicketsByIds, fetchAllTicketStats } from "../services/fetchTicketData";
import { useUserProfile } from "@/globalContexts/userContext";

const StatsCon = () => {
  const [openTickets, setOpenTickets] = useState(0);
  const [highPriorityTickets, setHighPriorityTickets] = useState(0);
  const [mediumPriorityTickets, setMediumPriorityTickets] = useState(0);
  const [lowPriorityTickets, setLowPriorityTickets] = useState(0);
  const { profile } = useUserProfile();

  useEffect(() => {
    const loadStats = async () => {
      if (profile?.role === "Staff") {
        try {
          const ticketIds = await fetchTicketIdsByUserId(profile.employee_id);
          const { open, high, medium, low } = await fetchTicketsByIds(ticketIds);
          setOpenTickets(open);
          setHighPriorityTickets(high);
          setMediumPriorityTickets(medium);
          setLowPriorityTickets(low);
        } catch (error) {
          console.error("Error fetching stats for Staff:", error);
        }
      } else if (profile?.role === "ESC Staff") {
        try {
          const { open, high, medium, low } = await fetchAllTicketStats();
          setOpenTickets(open);
          setHighPriorityTickets(high);
          setMediumPriorityTickets(medium);
          setLowPriorityTickets(low);
        } catch (error) {
          console.error("Error fetching stats for ESC Staff:", error);
        }
      }
    };

    loadStats();
  }, [profile]);

  return (
    <Stats 
      openTickets={openTickets} 
      highPriorityTickets={highPriorityTickets} 
      mediumPriorityTickets={mediumPriorityTickets} 
      lowPriorityTickets={lowPriorityTickets}
    />
  );
};

export default StatsCon;
