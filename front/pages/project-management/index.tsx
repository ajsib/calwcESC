// pages/project-management/index.tsx
import Header from "@/components/Shared/Internal/Header/Header";
import StatusOverview from "@/components/Pages/internalPages/ProjectManagement/StatusOverview";
import TaskSearchBar from "@/components/Pages/internalPages/ProjectManagement/TaskSearchBar";
import TaskList from "@/components/Pages/internalPages/ProjectManagement/TaskList";
import BucketSwitcher from "@/components/Pages/internalPages/ProjectManagement/BucketSwitcher";
import SearchBar from "@/components/Shared/Internal/SearchBar";
import tasks from "@/components/Shared/API/Data/tasks-dummy.json";

const ProjectManagementPage = () => {

  return (
    <>
      <Header/>
      <StatusOverview />
      <BucketSwitcher />
      <SearchBar />
      <TaskList tasks={tasks} />
    </>
  );
};

export default ProjectManagementPage;
