import React, { createContext, useContext, useState } from "react";

const DashboardContext = createContext<any>(null);

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <DashboardContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </DashboardContext.Provider>
  );
};