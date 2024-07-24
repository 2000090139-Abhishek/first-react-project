// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <button
          className="btn btn-primary btn-sm"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-controls="offcanvasSidebar"
        >
          ☰
        </button>
        <a className="navbar-brand ms-2" href="/">Professor-Student Portal</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Signup">Signup</a>
            </li>

          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
