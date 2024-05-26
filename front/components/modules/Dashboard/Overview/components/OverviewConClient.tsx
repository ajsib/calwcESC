import React, { useEffect, useState } from 'react';
import ModulePreviewClient from './OverviewClient';
import SearchResults from './SearchResults';
import { useDashboard } from '@/components/modules/Dashboard/DashboardContext';
import { useAuth } from '@/globalContexts/authContext';
import { fetchIdsByEmployeeId, fetchTasksAndTickets, countTasksAndTickets } from '../services/fetchOverviewData';
import { Ticket } from '@/public/Types/GlobalTypes';
import SkeletonModulePreview from './OverviewSkeleton';

const OverviewConClient: React.FC = () => {
  const { searchTerm } = useDashboard();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [counts, setCounts] = useState<{ taskCount: number, ticketCount: number, tasksDueTodayCount: number, highPriorityTicketsCount: number } | null>(null);

  const { person } = useAuth();

  useEffect(() => {
    if (!person) {
      return;
    }
    const loadData = async () => {
      const employeeId = person.employee_id;
      const { ticketIds } = await fetchIdsByEmployeeId(employeeId);
      const { tickets } = await fetchTasksAndTickets([], ticketIds); // Pass empty array for tasks
      const counts = await countTasksAndTickets(employeeId);

      setTickets(tickets);
      setCounts(counts);
      setLoading(false);
    };

    loadData();
  }, [person]);

  if (loading) {
    return <SkeletonModulePreview />;
  }

  if (searchTerm) {
    return <SearchResults results={searchTerm} />;
  }

  return <ModulePreviewClient tickets={tickets} counts={counts} />;
};

export default OverviewConClient;
