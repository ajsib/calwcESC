// contexts/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Person } from '@/public/Types/GlobalTypes';
import PeopleData from '@/public/Database/People.json';
import { useRouter } from 'next/router';

interface AuthContextProps {
  person: Person | null;
  login: (name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [person, setPerson] = useState<Person | null>(null);
  const router = useRouter();

  const login = (name: string) => {
    const foundPerson = PeopleData.People.find(person => person.name === name);
    if (foundPerson) {
      setPerson(foundPerson);
      router.push('/dashboard');
    } else {
      alert('Person not found');
    }
  };

  const logout = () => {
    setPerson(null);
  };

  return (
    <AuthContext.Provider value={{ person, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
