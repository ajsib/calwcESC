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

const ModulePreview = ({ tasks, tickets, counts }: OverviewProps) => {
  return (
    <div css={modulePreviewStyle}>
        <MyDay counts={counts} />
        <MyDayList tasks={tasks} tickets={tickets} />
        <DailyCalendar />
    </div>
  );
};

export default ModulePreview;
