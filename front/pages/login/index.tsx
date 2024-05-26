// pages/login.tsx
import React, { useState } from 'react';
import { useAuth } from '@/globalContexts/authContext';
import peopleData from '@/public/Database/People.json';

const LoginPage = () => {
  const { login } = useAuth();

  const loginAs = (name: string) => {
    login(name);
  };

  const roles = ["Client", "Staff", "ESC Staff"];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {roles.map(role => (
          <div key={role} style={{ textAlign: 'center' }}>
            <h3>{role}</h3>
            {peopleData.People.filter(person => person.role === role).slice(0, 3).map(person => (
              <button
                key={person.name}
                onClick={() => loginAs(person.name)}
                style={{ display: 'block', margin: '1rem 0' }}
              >
                {person.name}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
