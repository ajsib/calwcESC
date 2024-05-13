// pages/dashboard/index.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from "@/components/Shared/Internal/Header/Header";
import ProfileNav from "@/components/modules/Dashboard/ProfileNav/ProfileNav";
import UniversalSearch from "@/components/modules/Dashboard/UniversalSearch";
import Overview from "@/components/modules/Dashboard/Overview";
import SearchBar from '@/components/Shared/Internal/SearchBar';

const dashboardStyle = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default function Dashboard() {
  return (
    <div css={dashboardStyle}>
      <Header />
      <ProfileNav />
      <SearchBar />
      <Overview />
    </div>
  );
}
