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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
         <h4><span className='brand-first'>Emp</span><span className='brand-second'>Track</span></h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {!isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            )}
            {isAuthenticated && userRole === 'Admin' && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin Dashboard
                </Link>
              </li>
            )}
            {isAuthenticated && userRole === 'HR' && (
              <li className="nav-item">
                <Link className="nav-link" to="/hr">
                  HR Dashboard
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/employee">
                  Employee Dashboard
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <button className="btn btn-outline-danger" onClick={handleLogout}>
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
