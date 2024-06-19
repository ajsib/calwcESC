/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TaskListCon from "./components/TaskListCon";
import FilterBar from '../FilterBar/components/Filter';
import { useProjectManagement } from "../ProjectManagementContext";

const commonContainerStyle = css`
  background-color: #E9E9E9;
  height: 100%;
`;

const TaskList = () => {
  const { filterBarOpen } = useProjectManagement();
  return (
    <div css={commonContainerStyle}>
      {filterBarOpen && <FilterBar />}
      <TaskListCon />
    </div>
  );
};

export default TaskList;

