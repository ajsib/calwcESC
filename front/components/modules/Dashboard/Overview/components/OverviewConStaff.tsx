import React, { useEffect, useState } from 'react';
import ModulePreviewStaff from './OverviewStaff';
import SearchResults from './SearchResults';
import { useDashboard } from '@/components/modules/Dashboard/DashboardContext';
import { useAuth } from '@/globalContexts/authContext';
import { fetchIdsByEmployeeId, fetchTasksAndTickets, countTasksAndTickets } from '../services/fetchOverviewData';
import { Task, Ticket } from '@/public/Types/GlobalTypes';

const OverviewConStaff: React.FC = () => {
  const { searchTerm } = useDashboard();
  const [tasks, setTasks] = useState<Task[]>([]);
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
      const { taskIds, ticketIds } = await fetchIdsByEmployeeId(employeeId);
      const { tasks, tickets } = await fetchTasksAndTickets(taskIds, ticketIds);
      const counts = await countTasksAndTickets(employeeId);

      setTasks(tasks);
      setTickets(tickets);
      setCounts(counts);
      setLoading(false);
    };

    loadData();
  }, [person]);


  if (searchTerm) {
    return <SearchResults results={searchTerm} />;
  }

  return <ModulePreviewStaff tasks={tasks} tickets={tickets} counts={counts} />;
};

export default OverviewConStaff;
