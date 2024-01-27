// components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "styles/Login.scss"; // Import the SCSS file
import { useAuth } from "AuthContext";
import CustomInput from "components/CustomInput";
import { FaUser, FaLock } from "react-icons/fa";

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
      navigate("/"); // Redirect to the home page
    } else {
      setError("Invalid username or password");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-wrap">
          {user.authenticated ? (
            <p>
              You are already logged in as {user.role}. Login with admin role
            </p>
          ) : (
            <>
              <h2>Login</h2>
              <CustomInput
                label="username :"
                type="text"
                id="username"
                icon={<FaUser />}
                className="focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <CustomInput
                label="password :"
                type="password"
                id="password"
                icon={<FaLock />}
                className="focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
              />
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
