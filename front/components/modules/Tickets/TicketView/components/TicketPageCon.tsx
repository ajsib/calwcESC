// pages/tickets/[ticketId].tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TicketDisplay from './TicketDisplay';
import { fetchTicketById } from '../services/fetchTicketData';
import { Ticket } from '@/public/Types/GlobalTypes';

const TicketPageCon: React.FC = () => {
  const router = useRouter();
  const { ticketId } = router.query;
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (ticketId) {
      fetchTicketById(parseInt(ticketId as string)).then(data => {
        setTicket(data);
        setLoading(false);
      }).catch(error => {
        console.error("Error fetching ticket data:", error);
        setLoading(false);
      });
    }
  }, [ticketId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  return <TicketDisplay ticket={ticket} />;
};

export default TicketPageCon;
