// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'AuthContext';

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {user.authenticated && (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
