// pages/dashboard/index.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from "@/components/modules/shared/Header/Header";
import ProfileNav from "@/components/modules/Dashboard/ProfileNav";
import Overview from '@/components/modules/Dashboard/Overview';
import SearchBar from '@/components/modules/Dashboard/SearchBar';
import { DashboardProvider } from '@/components/modules/Dashboard/DashboardContext';
import { useAuth } from '@/globalContexts/authContext';
import { useUserProfile } from "@/globalContexts/userContext";

const dashboardStyle = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default function Dashboard() {
  const { loggedIn } = useAuth();
  const { profile } = useUserProfile();
  if (!loggedIn || !profile) {
    return <div>Either you're not logged in or you don't have a profile.</div>;
  }
  return (
    <div css={dashboardStyle}>
      <Header />
      <ProfileNav />
      <DashboardProvider>
        <SearchBar />
        <Overview />
      </DashboardProvider>
    </div>
  );
}
