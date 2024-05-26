import React, { useEffect, useState } from 'react';
import ModulePreviewClient from './OverviewClient';
import SearchResults from './SearchResults';
import { useDashboard } from '@/components/modules/Dashboard/DashboardContext';
import { useUserProfile } from '@/globalContexts/userContext';
import { fetchTicketsBySponsorName, countTicketsBySponsorName } from '../services/fetchOverviewData';
import { Ticket } from '@/public/Types/GlobalTypes';

const OverviewConClient: React.FC = () => {
  const { searchTerm } = useDashboard();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [counts, setCounts] = useState<{ total: number, open: number, closed: number} | null>(null);

  const { profile } = useUserProfile();

  useEffect(() => {
    if (!profile) {
      return;
    }
    const loadData = async () => {
      const employeeId = profile.employee_id;
      const tickets = await fetchTicketsBySponsorName(profile.name);
      const counts = await countTicketsBySponsorName(profile.name);

      setTickets(tickets);
      setCounts(counts);
      setLoading(false);
    };

    loadData();
  }, [profile]);

  if (searchTerm) {
    return <SearchResults results={searchTerm} />;
  }

  return <ModulePreviewClient tickets={tickets} counts={counts} />;
};

export default OverviewConClient;
