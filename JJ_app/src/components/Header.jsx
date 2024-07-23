// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>

      <nav>
        {/* <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/">Home</Link></li>
          <li style={styles.navItem}><Link to="/about">About</Link></li>
          <li style={styles.navItem}><Link to="/Login">Login</Link></li>
          <li style={styles.navItem}><Link to="/Signup">Signup</Link></li>
        </ul> */}
        {/* <ul class="nav justify-content-end"> */}
        <ul class="nav nav-tabs">
          <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/">Active</a></li>
          <li class="nav-item"><a class="nav-link" href="Login">Login</a></li>
          <li class="nav-item"><a class="nav-link" href="Signup">Signup</a></li>
          <li class="nav-item"><a class="nav-link" href="About">About Us</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Document</a></li>
          <li class="nav-item"><a class="nav-link disabled" aria-disabled="true">Admin Page</a></li>
        </ul>

        

      </nav>


      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous">
      </script>


    </header>
  );
};

const styles = {
  header: {
    padding: '20px',
    borderBottom: '1px solid #ccc',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
};

export default Header;
