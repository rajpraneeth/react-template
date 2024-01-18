// components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import "./Login.scss"; // Import the SCSS file

const Login = () => {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Simulating a simple login logic
    if (username === "demo" && password === "password") {
      login(); // Update the user authentication state
      navigate('/') // Redirect to the home page
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-wrap">
          <h2>Login</h2>
          {user.authenticated ? (
            <p>You are already logged in as {user.role}.</p>
          ) : (
            <>
              <div className="input-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="button-group">
                <button onClick={handleLogin}>Login</button>
              </div>
              {error && <p className="error-message">{error}</p>}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
