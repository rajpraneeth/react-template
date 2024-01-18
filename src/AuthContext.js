// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    authenticated: false,
    role: 'user', // Default role is 'user'
  });

  const login = () => {
    // Your login logic here
    setUser({ authenticated: true, role: 'user' });
  };

  const logout = () => {
    // Your logout logic here
    setUser({ authenticated: false, role: 'user' });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
