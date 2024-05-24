import Header from "@/components/modules/shared/Header/Header";
import StatusOverview from '@/components/modules/ProjectManagement/StatusOverview';
import { ProjectManagementProvider } from '@/components/modules/ProjectManagement/ProjectManagementContext';
import TaskList from '@/components/modules/ProjectManagement/TaskList';
import BucketSwitcher from '@/components/modules/ProjectManagement/BucketSwitcher';
import SearchBar from "@/components/modules/ProjectManagement/SearchBar";

const ProjectManagementPage = () => {
  return (
    <>
      <Header />
      <ProjectManagementProvider>
        <StatusOverview />
        <SearchBar />
        <BucketSwitcher />
        <TaskList />
      </ProjectManagementProvider>
    </>
  );
};

export default ProjectManagementPage;