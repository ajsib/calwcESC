/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Circle from '@/components/UI/icons/Dot';
import { StatusCardProps, StatusOverviewProps } from '../Types';

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

const StatusCard: React.FC<StatusCardProps> = ({ status, count, selected, onClick }) => (
  <div css={[statusCardStyle, selected && { backgroundColor: '#e0e0e0' }]} onClick={onClick}>
    <h2>{count}</h2>
    <p css={titleStyle}><Circle color={status === 'To Do' ? '#4287f5' : status === 'In Progress' ? 'orange' : '#ad1818'} size={10} />{status}</p>
  </div>
);

const StatusOverview: React.FC<StatusOverviewProps> = ({ onSelectStatus, selectedStatus, toDoCount, inProgressCount, overdueCount, onNewTaskModalOpen, onManageTeamsModalOpen }) => {

  return (
    <div css={statusOverviewStyle}>
      <StatusCard status="To Do" count={toDoCount} selected={selectedStatus === 'To Do'} onClick={() => onSelectStatus('To Do')} />
      <StatusCard status="In Progress" count={inProgressCount} selected={selectedStatus === 'In Progress'} onClick={() => onSelectStatus('In Progress')} />
      <StatusCard status="Overdue" count={overdueCount} selected={selectedStatus === 'Overdue'} onClick={() => onSelectStatus('Overdue')} />
      <div css={buttonContainerStyle}>
        <div css={buttonStyle} onClick={onNewTaskModalOpen}>New Task</div>
        <div css={buttonStyle} onClick={onManageTeamsModalOpen}>Edit Buckets</div>
        <div css={buttonStyle}>View Archive</div>
      </div>
    </div>
  );
};

export default StatusOverview;
