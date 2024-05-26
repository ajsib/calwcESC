import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Person } from '@/public/Types/GlobalTypes';

interface UserProfileContextProps {
  profile: Person | null;
  setProfile: React.Dispatch<React.SetStateAction<Person | null>>;
}

const UserProfileContext = createContext<UserProfileContextProps | undefined>(undefined);

export const UserProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<Person | null>(null);

  return (
    <UserProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = (): UserProfileContextProps => {
  const context = useContext(UserProfileContext);
  if (context === undefined) {
    throw new Error('useUserProfile must be used within a UserProfileProvider');
  }
  return context;
};
