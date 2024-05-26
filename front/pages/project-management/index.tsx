import Header from "@/components/modules/shared/Header/Header";
import StatusOverview from '@/components/modules/ProjectManagement/StatusOverview';
import { ProjectManagementProvider } from '@/components/modules/ProjectManagement/ProjectManagementContext';
import TaskList from '@/components/modules/ProjectManagement/TaskList';
import BucketSwitcher from '@/components/modules/ProjectManagement/BucketSwitcher';
import SearchBar from "@/components/modules/ProjectManagement/SearchBar";
import { useAuth } from '@/globalContexts/authContext';
import { useUserProfile } from "@/globalContexts/userContext";

const ProjectManagementPage = () => {
  const { loggedIn } = useAuth();
  const { profile } = useUserProfile();
  if (!loggedIn || !profile) {
    return <div>Either you're not logged in or you don't have a profile.</div>;
  }
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