/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Header from "@/components/Shared/Internal/Header/Header";
import StatusOverview from "@/components/Pages/internalPages/ProjectManagement/StatusOverview";
import TaskList from "@/components/Pages/internalPages/ProjectManagement/TaskList";
import BucketSwitcher from "@/components/Pages/internalPages/ProjectManagement/BucketSwitcher";
import SearchBar from "@/components/Shared/Internal/SearchBar";
import tasks from "@/components/Shared/API/Data/tasks-dummy.json";

const commonContainerStyle = css`
  margin: 2rem var(--margin);
  width: calc(100% - 2 * var(--margin));
`;

const paperStyle = css`
  margin: 2rem 0;
  background-color: #f3f3f3;
  padding: 1rem;
`;

const ProjectManagementPage = () => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedBucket, setSelectedBucket] = useState<string>("All");

  const handleSelectStatus = (status: string) => {
    if (selectedStatus === status) {
      setSelectedStatus(null); // Clear selection if the same status is clicked again
    } else {
      setSelectedStatus(status);
    }
  };

  const filteredTasks = selectedStatus ? tasks.filter(task => task.status === selectedStatus) : tasks;

  return (
    <>
      <Header />
      <StatusOverview selectedStatus={selectedStatus} onSelectStatus={handleSelectStatus} />
      <div css={commonContainerStyle}>
        <SearchBar />
        <div css={paperStyle}>
          <BucketSwitcher currentTeam={selectedBucket} onTeamSelect={setSelectedBucket} />
          <TaskList tasks={filteredTasks} />
        </div>
      </div>
    </>
  );
};

export default ProjectManagementPage;