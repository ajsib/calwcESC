// pages/project-management/index.tsx
import Header from "@/components/Shared/Internal/Header/Header";
import StatusOverview from "@/components/Pages/internalPages/ProjectManagement/StatusOverview";
import TaskSearchBar from "@/components/Pages/internalPages/ProjectManagement/TaskSearchBar";
import TaskList from "@/components/Pages/internalPages/ProjectManagement/TaskList";
import BucketSwitcher from "@/components/Pages/internalPages/ProjectManagement/BucketSwitcher";

const ProjectManagementPage = () => {
  // Replace with actual task data fetching logic
  const tasks = [
    {
      id: 1,
      title: 'Design Homepage',
      subTasks: [
        { id: 1, title: 'Create wireframes' },
        { id: 2, title: 'Design UI mockups' },
      ],
    },
    {
      id: 2,
      title: 'Implement Login Feature',
      subTasks: [{ id: 3, title: 'Implement frontend' }],
    },
    {
      id: 3,
      title: 'Refactor Codebase',
      subTasks: [
        { id: 4, title: 'Optimize performance' },
        { id: 5, title: 'Clean up redundant code' },
      ],
    },
    {
      id: 4,
      title: 'Test New Feature',
      subTasks: [{ id: 6, title: 'Write test cases' }],
    },
  ];

  return (
    <>
      <Header/>
      <StatusOverview />
      <BucketSwitcher />
      <TaskSearchBar />
      <TaskList tasks={tasks} />
    </>
  );
};

export default ProjectManagementPage;