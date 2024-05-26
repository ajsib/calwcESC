import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Person } from '@/public/Types/GlobalTypes';
import PeopleData from '@/public/Database/People.json';

interface UserProfileContextProps {
  profile: Person | null;
  setProfile: React.Dispatch<React.SetStateAction<Person | null>>;
  loadUserProfile: () => void;
  saveUserProfile: (foundPerson: Person) => void;
  clearUserProfile: () => void;
}

const UserProfileContext = createContext<UserProfileContextProps | undefined>(undefined);

export const UserProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<Person | null>(null);

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = () => {
    const storedPersonId = localStorage.getItem('person');
    if (storedPersonId) {
      const foundPerson = PeopleData.People.find(person => person.employee_id === parseInt(storedPersonId));
      if (foundPerson) {
        setProfile(foundPerson);
      }
    }
  };

  const saveUserProfile = (foundPerson: Person): void => {
    if (foundPerson) {
      setProfile(foundPerson);
      localStorage.setItem('person', foundPerson.employee_id.toString());
    } else {
      alert('Person not found');
    }
  };

  const clearUserProfile = () => {
    setProfile(null);
    localStorage.removeItem('person');
  };

  return (
    <UserProfileContext.Provider value={{ profile, setProfile, loadUserProfile, saveUserProfile, clearUserProfile }}>
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
