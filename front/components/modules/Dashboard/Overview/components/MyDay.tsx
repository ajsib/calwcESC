/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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



const MyDay = () => {
    return (
        <div css={myDayStyle}>
            <div css={titleStyle}>My Day</div>
            <div css={contentStyle}>
                <div css={cardStyle}>
                    <div css={headerStyle}>You have 3 open tickets assigned to you, 1 of the tickets is high priority</div>
                    <div css={textStyle}>3 new tickets have been added to the system that have not been triaged</div>
                </div>
                <div css={cardStyle}>
                    <div css={headerStyle}>You are assigned to 5 tasks, 2 of those tasks are due today</div>
                    <div css={textStyle}>There are 2 other tasks that are due this week, you have no overdue tasks</div>
                </div>
            </div>
        </div>
    );
};

export default MyDay;