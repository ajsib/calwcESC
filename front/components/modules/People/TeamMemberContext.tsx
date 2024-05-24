// context/TeamMemberContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { Profile, TeamMemberContextType, TeamMemberProviderProps} from './Types';

const TeamMemberContext = createContext<TeamMemberContextType | null>(null);

export const useTeamMember = () => useContext(TeamMemberContext);


export const TeamMemberProvider = ({ children }: TeamMemberProviderProps) => {
  const [teamMember, setTeamMember] = useState<Profile | null>(null);

  return (
    <TeamMemberContext.Provider value={{ teamMember, setTeamMember }}>
      {children}
    </TeamMemberContext.Provider>
  );
};