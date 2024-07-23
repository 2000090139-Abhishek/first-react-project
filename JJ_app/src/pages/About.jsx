import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout';
function About(){
  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.heading}>About Us</h1>
        <div style={styles.links}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </div>
      </div>
    </Layout>
  )
}

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

export default About;
