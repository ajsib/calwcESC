/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import Header from "@/components/Shared/Internal/Header/Header";
import StatusOverview from "@/components/Pages/internalPages/ProjectManagement/StatusOverview";
import TaskList from "@/components/Pages/internalPages/ProjectManagement/TaskList";
import BucketSwitcher from "@/components/Pages/internalPages/ProjectManagement/BucketSwitcher";
import SearchBar from "@/components/Shared/Internal/SearchBar";
import tasks from "@/components/Shared/API/Data/tasks-dummy.json";
import NewTaskModal from '@/components/Pages/internalPages/ProjectManagement/Modals/NewTask';
import ManageTeamsModal from '@/components/Pages/internalPages/ProjectManagement/Modals/BucketsModal';
import ArchiveModal from '@/components/Pages/internalPages/ProjectManagement/Modals/ArchiveModal';

const commonContainerStyle = css`
  margin: 2rem var(--margin);
  width: calc(100% - 2 * var(--margin));
`;

const paperStyle = css`
  margin: 2rem 0;
  background-color: #f3f3f3;
  padding: 1rem;
`;

interface SubTask {
  id: number;
  title: string;
  isChecked?: boolean;
}

type Task = {
  id: number;
  title: string;
  subTasks: SubTask[];
  people: number[];
  bucket: string;
  status: string;
  dueDate: string;
};

const ProjectManagementPage = () => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedBucket, setSelectedBucket] = useState<string>("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teams, setTeams] = useState<string[]>(["All", "Marketing Team", "Development Team", "Design Team"]);
  const [allTasks, setAllTasks] = useState(tasks);
  const [isTeamsModalOpen, setIsTeamsModalOpen] = useState(false);
  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState(false);

  
  const addTeam = (teamName: string) => {
    setTeams([...teams, teamName]);
  };

  const deleteTeam = (teamName: string) => {
    setTeams(teams.filter(t => t !== teamName));
  };

  useEffect(() => {
    console.log("Updated tasks:", allTasks);
  }, [allTasks]);

  const addTask = (task : Task) => {
    setAllTasks([...allTasks, task]);
    console.log('Added task:', task);
    console.log('All tasks:', allTasks);
  };

  const onAddTask = (newTask: Task) => {
    addTask(newTask);
    setIsModalOpen(false);
  };

  const handleSelectStatus = (status: string) => {
    if (selectedStatus === status) {
      setSelectedStatus(null); // Clear selection if the same status is clicked again
    } else {
      setSelectedStatus(status);
    }
  };

  const filteredTasks = selectedStatus ? allTasks.filter(task => task.status === selectedStatus) : allTasks;

  const filteredTasksByBucket = selectedBucket === "All" ? filteredTasks : filteredTasks.filter(task => task.bucket === selectedBucket);

  return (
    <>
      <div>
        <NewTaskModal isOpen={isModalOpen} close={() => setIsModalOpen(false)} addTask={addTask} />
        <ManageTeamsModal
        isOpen={isTeamsModalOpen}
        close={() => setIsTeamsModalOpen(false)}
        teams={teams}
        addTeam={addTeam}
        deleteTeam={deleteTeam}
        />
        <ArchiveModal isOpen={isArchiveModalOpen} close={() => setIsArchiveModalOpen(false)} tasks={allTasks} />
      </div>
      <Header />
      <StatusOverview selectedStatus={selectedStatus} onSelectStatus={handleSelectStatus} openModal={() => setIsModalOpen(true)} openTeamsModal={() => setIsTeamsModalOpen(true)} openArchiveModal={() => setIsArchiveModalOpen(true)}/>
      <div css={commonContainerStyle}>
        <SearchBar />
        <div css={paperStyle}>
          <BucketSwitcher currentTeam={selectedBucket} onTeamSelect={setSelectedBucket} teams={teams}/>
          <TaskList tasks={filteredTasksByBucket} onAddTask={onAddTask} />
        </div>
      </div>
    </>
  );
};

export default ProjectManagementPage;