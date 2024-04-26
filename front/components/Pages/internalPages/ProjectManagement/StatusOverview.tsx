// components/Pages/internalPages/ProjectManagement/StatusOverview.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Circle from '@/components/UI/Dot';


const statusOverviewStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  gap: 1rem;
  background-color: #FBFBFB;
  align-items: stretch; // This will ensure all child elements stretch to the same height
`;

const statusCardStyle = css`
  border: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
  flex: 1; 
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const buttonContainerStyle = css`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  border: 1px solid #ddd;
  gap: 1rem;
  justify-content: flex-start; 
  padding: 1rem;
  flex: 0 1 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const titleStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
        <p css={titleStyle}><Circle color='#4287f5' size={10} />To Do</p>
      </div>
      <div css={statusCardStyle}>
        <h2>{statusData.inProgressCount}</h2>
        <p css={titleStyle}><Circle color='orange' size={10} />In Progress</p>
      </div>
      <div css={statusCardStyle}>
        <h2>{statusData.overdueCount}</h2>
        <p css={titleStyle}><Circle color='#ad1818' size={10} />Overdue</p>
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
