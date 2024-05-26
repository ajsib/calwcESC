import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Person } from '@/public/Types/GlobalTypes';
import PeopleData from '@/public/Database/People.json';
import { useRouter } from 'next/router';
import { useUserProfile } from './userContext'; // Import the user profile context

interface AuthContextProps {
  person: Person | null;
  login: (name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [person, setPerson] = useState<Person | null>(null);
  const { setProfile } = useUserProfile();
  const router = useRouter();

  // Load user data from local storage when the app initializes
  useEffect(() => {
    const storedPersonId = localStorage.getItem('person');
    if (storedPersonId) {
      const foundPerson = PeopleData.People.find(person => person.employee_id === parseInt(storedPersonId));
      if (foundPerson) {
        setPerson(foundPerson);
        setProfile(foundPerson); // Set the user profile context state
      }
    }
  }, [setProfile]);

  const login = (name: string) => {
    const foundPerson = PeopleData.People.find(person => person.name === name);
    if (foundPerson) {
      setPerson(foundPerson);
      setProfile(foundPerson); // Set the user profile context state
      localStorage.setItem('person', foundPerson.employee_id.toString());
      router.push('/dashboard');
    } else {
      alert('Person not found');
    }
  };

  const logout = () => {
    setPerson(null);
    setProfile(null); // Clear the user profile context state
    localStorage.removeItem('person');
  };

  return (
    <AuthContext.Provider value={{ person, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
