/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TaskListCon from "./components/TaskListCon";

const commonContainerStyle = css`
  background-color: #E9E9E9;
  height: 100%;
`;

const TaskList = () => {
  return (
    <div css={commonContainerStyle}>
      <TaskListCon />
    </div>
  );
};

export default TaskList;

