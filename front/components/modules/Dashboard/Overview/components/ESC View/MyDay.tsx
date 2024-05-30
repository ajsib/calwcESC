/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MyDayProps, MyDayListProps } from '../../Types';

const myDayStyle = css`
    height: calc(100vh - 320px);
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: #FDFDFD;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
`;

const titleStyle = css`
    font-size: 2rem;
    font-weight: normal;
    margin-bottom: 2rem;
    color: #515151;
    margin-left: 16px;
    margin-top: 16px;
`;

const contentStyle = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem; /* Add some space between the cards */
`;

const cardStyle = css`
    background-color: #F5F5F5;
    padding: 1.5rem;
    margin-bottom: 1rem;
`;

const headerStyle = css`
    font-size: 1.75rem;
    font-weight: normal;
    margin-bottom: 1rem;
`;

const textStyle = css`
    margin-bottom: 0.5rem;
    color: #606060;
    font-size: 1.25rem;
`;

const MyDay = ({ counts } : MyDayProps) => {
    if (!counts) {
        return null;
    }

    return (
        <div css={myDayStyle}>
            <div css={titleStyle}>My Day</div>
            <div css={contentStyle}>
                <div css={cardStyle}>
                    <div css={headerStyle}>You have {counts.ticketCount} open tickets assigned to you, {counts.highPriorityTicketsCount} of the tickets are high priority</div>
                    <div css={textStyle}>Some additional information about tickets...</div>
                </div>
                <div css={cardStyle}>
                    <div css={headerStyle}>You are assigned to {counts.taskCount} tasks, {counts.tasksDueTodayCount} of those tasks are due today</div>
                    <div css={textStyle}>Some additional information about tasks...</div>
                </div>
            </div>
        </div>
    );
};

export default MyDay;
