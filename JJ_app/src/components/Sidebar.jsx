// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
