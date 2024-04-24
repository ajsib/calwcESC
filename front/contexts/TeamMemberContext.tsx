import { createContext, useContext, useState, ReactNode } from 'react';

interface TeamMember {
    name: string;
    rank: string;
    email: string;
    department: string;
    reportsTo: string;
    profilePhoto: string;
}

interface TeamMemberContextType {
  teamMember: TeamMember | null;
  setTeamMember: (teamMember: TeamMember | null) => void;
}

const TeamMemberContext = createContext<TeamMemberContextType | null>(null);

export const useTeamMember = () => useContext(TeamMemberContext);

interface TeamMemberProviderProps {
  children: ReactNode;
}

export const TeamMemberProvider = ({ children }: TeamMemberProviderProps) => {
  const [teamMember, setTeamMember] = useState<TeamMember | null>(null);

  return (
    <TeamMemberContext.Provider value={{ teamMember, setTeamMember }}>
      {children}
    </TeamMemberContext.Provider>
  );
};
