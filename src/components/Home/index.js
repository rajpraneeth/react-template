// components/Home.js
import React from "react";
import { useAuth } from "../../AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      {user.authenticated ? (
        <>
          <p>User: {user.role}</p>
          <p>authenticated: {`${user.authenticated}`}</p>
        </>
      ) : (
        <p>Please login to access user information</p>
      )}
    </div>
  );
};

export default Home;
