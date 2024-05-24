import { ReactNode } from 'react';

export interface Profile {
    id: number;
    name: string;
    profilePhoto: string;
    rank: string;
    email: string;
    department: string;
    reportsTo: string;
  }

export interface TeamMember {
    name: string;
    rank: string;
    email: string;
    department: string;
    reportsTo: string;
    profilePhoto: string;
    id: number;
}

export interface TeamMemberContextType {
  teamMember: Profile | null;
  setTeamMember: (teamMember: Profile | null) => void;
}

export interface TeamMemberProviderProps {
  children: ReactNode;
}