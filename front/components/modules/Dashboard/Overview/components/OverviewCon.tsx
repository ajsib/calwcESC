import React, { useEffect, useState } from 'react';
import ModulePreview from './Overview';
import SearchResults from './SearchResults';
import { useDashboard } from '@/components/modules/Dashboard/DashboardContext';


const OverviewCon: React.FC = () => {
  const { searchTerm } = useDashboard();
  if(searchTerm) {
    return <SearchResults results={searchTerm} />;
  }
  return <ModulePreview />;
};

export default OverviewCon;
