/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from "@/components/modules/shared/Header/Header";
import ProfileNav from "@/components/modules/Dashboard/ProfileNav";
import Overview from '@/components/modules/Dashboard/Overview';
import SearchBar from '@/components/modules/Dashboard/SearchBar';
import { DashboardProvider } from '@/components/modules/Dashboard/DashboardContext';
import { useAuth } from '@/globalContexts/authContext';

const dashboardStyle = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default function Dashboard() {
  const { person } = useAuth();

  return (
    <div css={dashboardStyle}>
      <Header />
      <ProfileNav />
      <DashboardProvider>
        <SearchBar />
        {person && <Overview role={person.role} />}
      </DashboardProvider>
    </div>
  );
}
