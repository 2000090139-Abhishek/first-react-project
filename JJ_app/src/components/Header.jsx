// // src/components/Header.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="bg-light p-3 border-bottom">
//       <nav className="container d-flex flex-wrap justify-content-center">
//         <ul className="nav">
          // <li className="nav-item">
          //   <Link to="/" className="nav-link">
          //     Home
          //   </Link>
          // </li>
          // <li className="nav-item">
          //   <Link to="/about" className="nav-link">
          //     About
          //   </Link>
          // </li>
          // <li className="nav-item">
          //   <Link to="/login" className="nav-link">
          //     Login
          //   </Link>
          // </li>
          // <li className="nav-item">
          //   <Link to="/signup" className="nav-link">
          //     Signup
          //   </Link>
          // </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
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
              <a className="nav-link" href="/signup">Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
