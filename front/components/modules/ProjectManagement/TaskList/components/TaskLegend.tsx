/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';

const legendStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    padding-left: 16px;
    padding-top: 2rem;
    border-bottom: 1px solid #ececec;
    font-size: 18px;
    color: #676767;
`;


const assigneeStyle = css`
  flex: 0 0 150px;
  text-align: right;
    margin-right: 1rem;
    color: #737373;
`;

const endDateStyle = css`
  flex: 0 0 180px;
  text-align: left;
    color: #737373;
`;

const titleStyle = css`
    flex: 1;
    color: #737373;
    margin-left: 1.5rem;
`;



const TaskLegend = () => {
    return (
        <div css={legendStyle}>
            <span css={titleStyle}>Tasks</span>
            <div css={assigneeStyle}>Assignees</div>
            <div css={endDateStyle}>End Date</div>
        </div>
    );
};

export default TaskLegend;
