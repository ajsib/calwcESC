/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { MyDayListProps } from '../../Types';
import { useRouter } from 'next/router';

const myDayListStyle = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    background-color: #F9F9F9;
    box-sizing: border-box;
`;

const topSectionStyle = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #F5F5F5;
    color: #fff;
    padding: 1rem;
`;

const tabStyle = css`
  font-size: 1rem;
  font-weight: bold;
  color: #515151;
  cursor: pointer;
  padding: 0.5rem 1rem;
  &:hover {
    color: #ccc;
  }
`;

const messageSectionStyle = css`
  flex-grow: 1;
  overflow: auto; /* Enable scrolling for tasks and tickets */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #F9F9F9;
  padding: 2rem;
  box-sizing: border-box;
`;

const messageStyle = css`
  color: #333;
  font-size: 1.25rem;
  text-align: center;
`;

const cardStyle = css`
  background-color: #E8E8E8;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer; /* Add cursor pointer to indicate clickable */
`;

const textStyle = css`
  margin-bottom: 0.5rem;
  color: #606060;
  font-size: 1.25rem;
`;

const MyDayList = ({ tasks, tickets }: MyDayListProps) => {
    const [selectedTab, setSelectedTab] = useState<'tasks' | 'tickets'>('tasks');
    const router = useRouter();

    const handleCardClick = (id: number, type: 'task' | 'ticket') => {
        if (type === 'task') {
            localStorage.setItem('taskId', id as unknown as string);
            router.push(`/project-management`);
        } else {
            router.push(`/tickets/${id}`);
        }
    };

    return (
        <div css={myDayListStyle}>
            <div css={topSectionStyle}>
                <div css={tabStyle} onClick={() => setSelectedTab('tasks')}>My Tasks</div>
                <div css={tabStyle} onClick={() => setSelectedTab('tickets')}>My Tickets</div>
                <div css={tabStyle}>Important Links</div>
            </div>
            <div css={messageSectionStyle}>
                {selectedTab === 'tasks' && tasks.length > 0 && (
                    <div>
                        {tasks.map(task => (
                            <div key={task.task_id} css={cardStyle} onClick={() => handleCardClick(task.task_id, 'task')}>
                                <div css={textStyle}><strong>Title:</strong> {task.title}</div>
                                <div css={textStyle}><strong>Status:</strong> {task.status}</div>
                            </div>
                        ))}
                    </div>
                )}
                {selectedTab === 'tickets' && tickets.length > 0 && (
                    <div>
                        {tickets.map(ticket => (
                            <div key={ticket.ticket_id} css={cardStyle} onClick={() => handleCardClick(ticket.ticket_id, 'ticket')}>
                                <div css={textStyle}><strong>Title:</strong> {ticket.title}</div>
                                <div css={textStyle}><strong>Status:</strong> {ticket.status}</div>
                            </div>
                        ))}
                    </div>
                )}
                {selectedTab === 'tasks' && tasks.length === 0 && (
                    <div css={messageStyle}>No tasks assigned.</div>
                )}
                {selectedTab === 'tickets' && tickets.length === 0 && (
                    <div css={messageStyle}>No tickets assigned.</div>
                )}
            </div>
        </div>
    );
};

export default MyDayList;
