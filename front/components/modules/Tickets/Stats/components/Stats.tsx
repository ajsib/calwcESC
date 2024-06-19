/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Circle from '@/components/UI/icons/Dot';
import { StatsProps } from '../Types';
import { useRouter } from 'next/router';
import { useTicketContext } from '../../TicketContext';

const statsOverviewStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 0rem;
  gap: 0rem;
  background-color: #FBFBFB;
  align-items: stretch; 
  height: 16rem;  
`;

const statCardStyle = (isSelected?: boolean) => css`
  border: 1px solid #EAEAEA;
  background-color: ${isSelected ? '#E8E8E8' : '#F4F4F4'};
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

const Stats = ({ openTickets, highPriorityTickets, mediumPriorityTickets, lowPriorityTickets }: StatsProps) => {
  const router = useRouter();
  const { selectedPriority, setSelectedPriority, setIsTicketEntryPageOpen } = useTicketContext();

  const handleCardClick = (priority: string) => {
    if (selectedPriority === priority) {
      setSelectedPriority('');
    } else {
      setSelectedPriority(priority);
    }
  };

  return (
    <div css={statsOverviewStyle}>
      <div css={statCardStyle()}>
        <h2>{openTickets}</h2>
        <p>Open Tickets</p>
      </div>
      <div css={statCardStyle(selectedPriority === 'High')} onClick={() => handleCardClick('High')}>
        <h2>{highPriorityTickets}</h2>
        <p css={titleStyle}><Circle size={10} color="red" /> High Priority</p>
      </div>
      <div css={statCardStyle(selectedPriority === 'Medium')} onClick={() => handleCardClick('Medium')}>
        <h2>{mediumPriorityTickets}</h2>
        <p css={titleStyle}><Circle size={10} color="orange" /> Medium Priority</p>
      </div>
      <div css={statCardStyle(selectedPriority === 'Low')} onClick={() => handleCardClick('Low')}>
        <h2>{lowPriorityTickets}</h2>
        <p css={titleStyle}><Circle size={10} color="green" /> Low Priority</p>
      </div>
      <div css={buttonContainerStyle}>
        <div css={css`display: flex;`}>
          <div css={buttonStyleSecondaryLeft} onClick={() => router.push('/project-management')}>Project Management</div>
          <div css={buttonStyleSecondaryRight} onClick={() => setIsTicketEntryPageOpen(true)}>Manual Entry</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
