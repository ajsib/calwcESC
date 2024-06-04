import React, { useEffect, useState } from 'react';
import ModulePreview from './Overview';
import SearchResults from '../SearchResults';
import { useDashboard } from '@/components/modules/Dashboard/DashboardContext';
import { useUserProfile } from '@/globalContexts/userContext';
import { fetchIdsByEmployeeId, fetchTasksAndTickets, countTasksAndTickets } from '../../services/fetchOverviewData';
import { Task, Ticket, File } from '@/public/Types/GlobalTypes';

const OverviewCon: React.FC = () => {
  const { searchTerm } = useDashboard();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [counts, setCounts] = useState<{ taskCount: number, ticketCount: number, tasksDueTodayCount: number, highPriorityTicketsCount: number } | null>(null);

  const { profile } = useUserProfile();

  useEffect(() => {
    if (!profile) {
      return;
    }
    const loadData = async () => {
      const employeeId = profile.employee_id;
      const { taskIds, ticketIds } = await fetchIdsByEmployeeId(employeeId);
      const { tasks, tickets } = await fetchTasksAndTickets(taskIds, ticketIds);
      const counts = await countTasksAndTickets(employeeId);

      setTasks(tasks);
      setTickets(tickets);
      setFiles(files);
      setCounts(counts);
      setLoading(false);
    };

    loadData();
  }, [profile, files]);

  if (searchTerm) {
    return <SearchResults results={searchTerm} />;
  }

  return <ModulePreview tasks={tasks} tickets={tickets} counts={counts} loading={loading} />;
};

export default OverviewCon;
