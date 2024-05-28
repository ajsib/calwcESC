/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { OverviewProps } from '../Types';
import DailyCalendar from "@/components/modules/Dashboard/Overview/components/DailyCalendar";
import MyDayList from "@/components/modules/Dashboard/Overview/components/MyDayList";
import MyDay from "@/components/modules/Dashboard/Overview/components/MyDay";

const modulePreviewStyle = css`
    margin: 2rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    line-height: 2rem;
    flex-grow: 1;
    gap: 0rem; /* Add some space between the columns */
`;

const jsonStyle = css`
  background-color: #f5f5f5;
  margin: 1rem;
`;

const ModulePreview = ({ tasks, tickets, counts }: OverviewProps) => {
  return (
    <div css={modulePreviewStyle}>
        <MyDay />
        <MyDayList />
        <DailyCalendar />
    </div>
  );
};

export default ModulePreview;
