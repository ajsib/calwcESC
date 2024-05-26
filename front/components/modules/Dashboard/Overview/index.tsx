import React from 'react';
import OverviewCon from './components/OverviewCon';
import OverviewConClient from './components/OverviewConClient';
import OverviewConStaff from './components/OverviewConStaff';

interface OverviewProps {
  role: string;
}

const Overview: React.FC<OverviewProps> = ({ role }) => {
  if (role === 'Client') {
    return <OverviewConClient />;
  }
  if (role === 'Staff') {
    return <OverviewConStaff />;
  }
  if (role === 'ESC Staff') {
    return <OverviewCon />;
  }

  return null; // or some fallback UI if role is not recognized
};

export default Overview;
