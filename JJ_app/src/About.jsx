import React from 'react'
import { Link } from 'react-router-dom'
function About(){
  return (
    <div style={styles.container}>
      <h1>About</h1>
      <div style={styles.links}>
        <Link to="/about" style={styles.link}>
          About
        </Link>
      </div>
    </div>
  )
}

export default About;
<div style={styles.container}>
  <h1 style={styles.heading}>Welcome to the Professor-Student Portal</h1>
  <p style={styles.paragraph}>
    This platform allows professors to upload notes and documents which students
    can download after logging in.
  </p>
  <div style={styles.links}>
    <Link to="/about" style={styles.link}>
      About
    </Link>
    <Link to="/login" style={styles.link}>
      Login
    </Link>
    <Link to="/signup" style={styles.link}>
      Signup
    </Link>
  </div>
</div>;