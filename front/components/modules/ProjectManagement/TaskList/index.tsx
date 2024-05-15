/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TaskListCon from "./components/TaskListCon";

const commonContainerStyle = css`
  margin: 2rem var(--margin);
  width: calc(100% - 2 * var(--margin));
`;

const TaskList = () => {
    return (
        <div css={commonContainerStyle}>
            <TaskListCon />
        </div>
    );
};

export default TaskList;