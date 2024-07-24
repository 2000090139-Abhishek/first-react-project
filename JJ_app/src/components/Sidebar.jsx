import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/">Home</Link></li>
        <li style={styles.navItem}><Link to="/about">About</Link></li>
        <li style={styles.navItem}><Link to="/login">Login</Link></li>
        <li style={styles.navItem}><Link to="/signup">Signup</Link></li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    height: '100vh',
    background: '#f4f4f4',
    padding: '20px',
    borderRight: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    margin: '20px 0',
  },
};

export default Sidebar;
