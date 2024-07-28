// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Layout from './components/Layout';
// import image1 from '../src/assets/image1.jpg';

// const App = () => {
//   return (
//     <Router>
//       <div
//         className='text-white h-[100vh] flex justify-center items-center bg-cover'
//         style={{ backgroundImage: `url(${image1})` }}
//       >
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="card">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

