/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "@/components/modules/shared/Header/Header";
import StatusOverview from '@/components/modules/ProjectManagement/StatusOverview';
import { ProjectManagementProvider } from '@/components/modules/ProjectManagement/ProjectManagementContext';
import TaskList from '@/components/modules/ProjectManagement/TaskList';
import BucketSwitcher from '@/components/modules/ProjectManagement/BucketSwitcher';
import SearchBar from "@/components/modules/ProjectManagement/SearchBar";
import { useAuth } from '@/globalContexts/authContext';
import { useUserProfile } from "@/globalContexts/userContext";

const pageStyle = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ProjectManagementPage = () => {
  const { loggedIn } = useAuth();
  const { profile } = useUserProfile();
  if (!loggedIn || !profile || profile.role === "Client") {
    return <div>Either you&apos;re not logged in or you don&apos;t have a profile.</div>;
  }
  return (
    <div css={pageStyle}>
      <Header />
      <ProjectManagementProvider>
        <StatusOverview />
        <SearchBar />
        <BucketSwitcher />
        <TaskList />
      </ProjectManagementProvider>
    </div>
  );
  
};

export default ProjectManagementPage;
