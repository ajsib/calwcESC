// components/Pages/internalPages/ProjectManagement/StatusOverview.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const statusOverviewStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  gap: 1rem;
  align-items: stretch; // This will ensure all child elements stretch to the same height
`;

const statusCardStyle = css`
  border: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
`;

const buttonContainerStyle = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  gap: 1rem;
  justify-content: flex-start; 
  padding: 1rem;
  flex: 0 1 auto;
`;

const buttonStyle = css`
  border: 1px solid #ddd;
  cursor: pointer;
  padding: 1rem;
  width: calc(100% - 2rem); 
  text-align: center; 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eaeaea;
  }
`;


const StatusOverview = () => {
  const statusData = {
    toDoCount: 8,
    inProgressCount: 5,
    overdueCount: 2
  };

  return (
    <div css={statusOverviewStyle}>
      <div css={statusCardStyle}>
        <h2>{statusData.toDoCount}</h2>
        <p>To Do</p>
      </div>
      <div css={statusCardStyle}>
        <h2>{statusData.inProgressCount}</h2>
        <p>In Progress</p>
      </div>
      <div css={statusCardStyle}>
        <h2>{statusData.overdueCount}</h2>
        <p>Overdue</p>
      </div>
      <div css={buttonContainerStyle}>
        <div css={buttonStyle}>New Task</div>
        <div css={buttonStyle}>Edit Buckets</div>
        <div css={buttonStyle}>View Archive</div>
      </div>
    </div>
  );
};

export default StatusOverview;
