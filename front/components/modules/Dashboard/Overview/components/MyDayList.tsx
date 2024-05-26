/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F9F9F9;
  border-radius: 0 0 8px 8px;
  padding: 2rem;
  box-sizing: border-box;
`;

const messageStyle = css`
  color: #333;
  font-size: 1.25rem;
  text-align: center;
`;

const MyDayList = () => {
    return (
        <div css={myDayListStyle}>
            <div css={topSectionStyle}>
                <div css={tabStyle}>My Tasks</div>
                <div css={tabStyle}>My Tickets</div>
                <div css={tabStyle}>Important Links</div>
            </div>
            <div css={messageSectionStyle}>
                <div css={messageStyle}>Task and Ticket List here</div>
            </div>
        </div>
    );
};

export default MyDayList;