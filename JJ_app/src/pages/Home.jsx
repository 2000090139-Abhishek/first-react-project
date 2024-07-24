// src/pages/Home.jsx
import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="container text-center py-5">
        <h1>Welcome to the Professor-Student Portal</h1>
        <p>This platform allows professors to upload notes and documents which students can download after logging in.</p>
      </div>
    </Layout>
  );
};

export default Home;
