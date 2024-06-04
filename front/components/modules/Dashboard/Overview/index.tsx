import React from 'react';
import OverviewCon from './components/ESC View/OverviewCon';
import OverviewConClient from './components/OverviewConClient';
import OverviewConStaff from './components/OverviewConStaff';
import { useUserProfile } from '@/globalContexts/userContext';

const Overview: React.FC = () => {
  const { profile } = useUserProfile();

  if (!profile) {
    return;
  }
  if (profile.role === 'Client') {
    return <OverviewConClient />;
  }
  if (profile.role === 'Staff') {
    return <OverviewConStaff />;
  }
  if (profile.role === 'ESC Staff') {
    return <OverviewCon />;
  }

  return null; // or some fallback UI if role is not recognized
};

export default Overview;
