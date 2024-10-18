// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token'); // Check if the user is authenticated
  const userRole = localStorage.getItem('userRole'); // Get the user role

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    localStorage.removeItem('userRole'); // Remove the user role from local storage
    navigate('/login'); // Redirect to the login page
  };

  return (
    <nav>
      <ul>
        {!isAuthenticated && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        {isAuthenticated && userRole === 'Admin' && (
          <li>
            <Link to="/admin">Admin Dashboard</Link>
          </li>
        )}
        {isAuthenticated && userRole === 'HR' && (
          <li>
            <Link to="/hr">HR Dashboard</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/employee">Employee Dashboard</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
