// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-3">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
