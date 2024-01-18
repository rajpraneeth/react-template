// components/Home.js
import React from "react";
import { useAuth } from "../../AuthContext";

const Home = () => {
  const { user, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      {user.authenticated ? (
        <>
          <p>User: {user.role}</p>
          <p>authenticated: {`${user.authenticated}`}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Please login to access user information</p>
      )}
    </div>
  );
};

export default Home;
