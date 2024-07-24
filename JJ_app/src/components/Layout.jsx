// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-3" style={{ paddingTop: '56px', paddingBottom: '60px' }}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
