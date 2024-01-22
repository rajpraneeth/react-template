// AuthContext.js
import apiService from "api/apiService";

import React, { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem("user");
    return storedUser
      ? JSON.parse(storedUser)
      : { authenticated: false, role: "user" };
  });
  const { data, refetch } = apiService.useGet("emp", "/api/v1/employees");

  const login = async () => {
    try {
      // Your login logic here
      refetch();
      console.log("GET response:", data);
      const newUser = { authenticated: true, role: "user" };
      setUser(newUser);
      sessionStorage.setItem("user", JSON.stringify(newUser));
      toast.success("Login successful");
    } catch (error) {
      console.error("GET error:", error);
      // Handle error, show toast, or perform other actions
    }
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
