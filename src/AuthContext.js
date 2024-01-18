// AuthContext.js
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem("user");
    return storedUser
      ? JSON.parse(storedUser)
      : { authenticated: false, role: "user" };
  });

  const login = () => {
    // Your login logic here
    const newUser = { authenticated: true, role: "user" };
    setUser(newUser);
    sessionStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    // Your logout logic here
    setUser({ authenticated: false, role: "user" });
    sessionStorage.removeItem("user");
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
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
