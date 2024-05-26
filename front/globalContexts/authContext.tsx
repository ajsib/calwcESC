import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useUserProfile } from './userContext';
import PeopleData from '@/public/Database/People.json';

interface AuthContextProps {
  login: (name: string) => void;
  logout: () => void;
  loggedIn: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const { saveUserProfile, clearUserProfile } = useUserProfile();
  const router = useRouter();

  const login = (name: string) => {
    const foundPerson = PeopleData.People.find(person => person.name === name);
    if (foundPerson) {
      saveUserProfile(foundPerson);
      setLoggedIn(true);
      router.push('/dashboard');
    } else {
      alert('Person not found');
    }
  };

  const logout = () => {
    setLoggedIn(false);
    clearUserProfile();
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ login, logout, loggedIn }}>
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
