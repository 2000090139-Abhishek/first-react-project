// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Abhishek Chaudhary</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    borderTop: '1px solid #ccc',
    textAlign: 'center',
  },
};

export default Footer;
