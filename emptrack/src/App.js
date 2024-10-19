// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import HR from './pages/HR';
import Employee from './pages/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole'); // Get the user role

  return (
    <Router>
      <Navbar /> {/* Navbar will appear on all pages */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />} 
        />
        <Route 
          path="/admin" 
          element={isAuthenticated && userRole === 'Admin' ? <Admin /> : <Navigate to="/login" replace />} 
        />
        <Route 
          path="/hr" 
          element={isAuthenticated && (userRole === 'Admin' || userRole === 'HR') ? <HR /> : <Navigate to="/login" replace />} 
        />
        <Route 
          path="/employee" 
          element={isAuthenticated ? <Employee /> : <Navigate to="/login" replace />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
