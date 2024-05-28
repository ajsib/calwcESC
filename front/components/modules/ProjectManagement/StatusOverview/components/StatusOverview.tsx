/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Circle from '@/components/UI/icons/Dot';
import { StatusCardProps, StatusOverviewProps } from '../Types';
import { useProjectManagement } from '../../ProjectManagementContext';

const statusOverviewStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 0rem;
  gap: 0rem;
  background-color: #FBFBFB;
  align-items: stretch; // This will ensure all child elements stretch to the same height
  height: 16rem;  
`;

const statusCardStyle = css`
  border: 1px solid #EAEAEA;
  text-align: center;
  cursor: pointer;
  flex: 1; 
  background-color: #F4F4F4;
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
    justify-content: center;
    padding: 1rem;
    flex: 0 1 auto;
    min-width: 575px;
    background-color: #DEDEDE;
`;

const buttonStylePrimary = css`
    border: 1px solid #C2C2C2;
    cursor: pointer;
    padding: 1.25rem;
    width: 100%;
    text-align: left;
    transition: background-color 0.3s ease;
    background-color: #4E5E48;
    font-size: 1.25rem;
    color: #FFFFFF;
    &:hover {
        background-color: #667B5E;
    }
`;

const buttonStyleSecondaryLeft = css`
  border: 1px solid #C2C2C2;
  margin-right: 8px;  
  cursor: pointer;
  padding: 1.25rem;
  width: 50%;
  text-align: left; 
  transition: background-color 0.3s ease;
  color: #364132;
    font-size: 1.25rem;

    &:hover {
    background-color: #eaeaea;
  }
`;

const buttonStyleSecondaryRight = css`
  border: 1px solid #C2C2C2;
  margin-left: 8px;  
  cursor: pointer;
  padding: 1.25rem;
    width: 50%;
  text-align: left; 
  transition: background-color 0.3s ease;
    font-size: 1.25rem;

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
  <div css={[statusCardStyle, selected && { backgroundColor: '#E8E8E8' }]} onClick={onClick}>
    <h2>{count}</h2>
    <p css={titleStyle}><Circle color={status === 'To Do' ? '#4287f5' : status === 'In Progress' ? 'orange' : '#ad1818'} size={10} />{status}</p>
  </div>
);

const StatusOverview: React.FC<StatusOverviewProps> = ({ onSelectStatus, selectedStatus, toDoCount, inProgressCount, overdueCount, onNewTaskModalOpen, onManageTeamsModalOpen }) => {
  const { showArchived, handleShowArchived } = useProjectManagement();

  return (
    <div css={statusOverviewStyle}>
        <StatusCard status="To Do" count={toDoCount} selected={selectedStatus === 'To Do'} onClick={() => onSelectStatus('To Do')} />
      <StatusCard status="To Do" count={toDoCount} selected={selectedStatus === 'To Do'} onClick={() => onSelectStatus('To Do')} />
      <StatusCard status="In Progress" count={inProgressCount} selected={selectedStatus === 'In Progress'} onClick={() => onSelectStatus('In Progress')} />
      <StatusCard status="Overdue" count={overdueCount} selected={selectedStatus === 'Overdue'} onClick={() => onSelectStatus('Overdue')} />
        <div css={buttonContainerStyle}>
            <div css={css`display: flex;`}>
                <div css={buttonStyleSecondaryLeft} onClick={onManageTeamsModalOpen}>Edit Teams</div>
                <div css={buttonStyleSecondaryRight} onClick={handleShowArchived}>Archive</div>
            </div>
            <div css={css`display: flex;`}>
                <div css={buttonStylePrimary} onClick={onNewTaskModalOpen}>New Task</div>
            </div>
        </div>
    </div>
  );
};

export default StatusOverview;
