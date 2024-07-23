import React from 'react'
import { Link } from 'react-router-dom'
const App=()=> {
  
  // return (
  //   <h1>JJ app</h1>
  // )
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Professor-Student Portal</h1>
      <p style={styles.paragraph}>This platform allows professors to upload notes and documents which students can download after logging in.</p>
      <div style={styles.links}>
        <Link to="/about" style={styles.link}>About</Link>
        
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2rem',
    marginBottom: '40px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  link: {
    fontSize: '1.2rem',
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default App
