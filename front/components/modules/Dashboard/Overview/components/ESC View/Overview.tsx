/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { OverviewProps } from '../../Types';
import DailyCalendar from "@/components/modules/Dashboard/Overview/components/ESC View/DailyCalendar";
import MyDayList from "@/components/modules/Dashboard/Overview/components/ESC View/MyDayList";
import MyDay from "@/components/modules/Dashboard/Overview/components/ESC View/MyDay";
import MyDayListSkeleton from "@/components/modules/Dashboard/Overview/components/ESC View/MyDayListSkeleton";
import MyDaySkeleton from "@/components/modules/Dashboard/Overview/components/ESC View/MyDaySkeleton";

const modulePreviewStyle = css`
    margin: 2rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    line-height: 2rem;
    flex-grow: 1;
    gap: 0rem;
`;

const ModulePreview = ({ tasks, tickets, counts, loading }: OverviewProps) => {
  if (loading) {
    return (
      <div css={modulePreviewStyle}>
          <MyDaySkeleton />
          <MyDayListSkeleton />
          <DailyCalendar />
      </div>
    );
  }

  return (
    <div css={modulePreviewStyle}>
        <MyDay counts={counts} />
        <MyDayList tasks={tasks} tickets={tickets} />
        <DailyCalendar />
    </div>
  );
};

export default ModulePreview;
