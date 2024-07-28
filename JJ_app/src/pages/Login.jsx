// // src/pages/Login.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/login', { email, password });
//       if (response.data.success) {
//         navigate('/');
//       } else {
//         setError(response.data.message);
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-8 col-lg-6">
//           <div className="card">
//             <div className="card-header">
//               <h4 className="card-title">Login</h4>
//             </div>
//             <div className="card-body">
//               <form onSubmit={handleLogin}>
//                 <div className="mb-3">
//                   <label className="form-label">Email</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//                 {error && <div className="alert alert-danger">{error}</div>}
//                 <button type="submit" className="btn btn-primary">Login</button>
//               </form>
//             </div>
//             <div className="card-footer">
//               <p>Don't have an account? <a href="/signup">Sign up</a></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   return (
//     <div className='flex justify-center items-center h-screen'>
//       <div className='border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm' 
//            style={{ backgroundColor: 'rgba(76, 175, 80, 0.3)' }}>
//         <h1 className='text-4xl text-white font-bold text-center mb-6'>Login</h1>
//         <form action="">
//           <div className='relative my-4'>
//             <input
//               type="email"
//               className="block w-72 py-2.3 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
//             placeholder=""/>
//             {/* <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600">Your Email</label> */}

//             <label htmlFor="email" className="absolute text-sm text-white duration-300 transform translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer focus: text-blue-600 peer focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus: translate-y-6 ">Your Email</label>
//           </div>
//           <div className='relative my-4'>
//             <input
//               type="password"
//               className="block w-full py-2.3 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
//             placeholder=""/>
//             <label htmlFor="password" className="absolute text-sm text-white duration-300 transform translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer focus: text-blue-600 peer focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus: translate-y-6 ">Your Password</label>
//           </div>
//           <div className='flex justify-between items-center '>
//           <div className='flex gap-2 item-center '>
//             <input type="checkbox" id="rememberMe"  />
//             <label htmlFor="rememberMe" className="text-gray-400">Remember Me</label>
//           </div>
//             <Link to=" " className="text-blue-500 cursor-pointer">Forgot Password?</Link>
//           </div>
//           <button type="submit" className="w-full mb-4 txt-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors: duration-300 ">Login</button>
//           <div className='flex justify-between items-center mb-4'>
//             <span className="text-blue-500 cursor-pointer">Forgot Password?</span>
//           </div>
//         </form>
//         <div className='mt-4 text-center'>
//           <span className="text-gray-400">New User? <Link to='/signup' className="text-blue-500">Create an Account</Link></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";

const Login = ({ setLoginUser }) => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const history = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login",user);
      console.log("successful login");
      localStorage.setItem("authToken", response.data.authToken);
      setLoginUser(response.data.authToken);
      if (typeof setLoginUser === 'function') {
        setLoginUser(response.data.authToken);
      }
     
      if (response.data.role === 'admin') {
        history('/admin'); // Redirect to admin panel
      } else {
        history('/index'); // Redirect to normal page
      }
      // history('/index');

      
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response?.data.message || "An error occurred");
    }
  };

  const toggleLoginForm = () => {
    var body = document.body;
    body.classList.toggle("opened");
  };

  const playVideo = () => {
    var video = document.getElementById("myVideo");
    if (video) {
      video.muted = false;
      video.play().catch((error) => {
        console.error("Autoplay was prevented:", error);
      });
    }
  };

  useEffect(() => {
    var video = document.getElementById("myVideo");
    if (video) {
      video.play().catch((error) => {
        console.error("Autoplay was prevented:", error);
      });
    }

    var audio = document.getElementById("myAudio");
    if (audio) {
      audio.play().catch((error) => {
        console.error("Autoplay was prevented:", error);
      });
    }
  }, []);

  useEffect(() => {
    const fetchLoginStatus = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await axios.get('http://localhost:5000/api/auth/checklogin', {
          headers: {
            'auth-token': authToken,
          },
        });
  
        // Update the isLoggedIn state based on the response
        setIsLoggedIn(response.data.isLoggedIn);
  
        // If the user is logged in, the UI will be updated accordingly
  
      } catch (error) {
        console.error('Fetch login status error:', error.message);
      }
    };
  
    fetchLoginStatus();
  }, []); // Remove history from the dependency array to avoid unnecessary redirects
  

  return (
    <>
      <video autoPlay id="myVideo" loop muted onClick={playVideo}>
        <source src="/video/login.mp4" type="video/mp4" />
      </video>

      <audio autoPlay loop id="myAudio">
        <source src="/sound/login.mp3" type="audio/mp3" />
      </audio>

      <header className="container">
        <ul>
          <li>
            <Link onClick={toggleLoginForm} className="login">
              Sign in
            </Link>
          </li>
        </ul>
      </header>

      <main className="login-form">
        <div onClick={toggleLoginForm} className="close-login-form">
          &times;
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="input-group">
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              value={user.password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
            />
            <label>Password</label>
          </div>

          <div className="remember">
            <div className="checkbox-group">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <Link to="/">Forgot password?</Link>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          {error && <div className="error-message">{error}</div>}
        </form>

        <p>
          Don't have an account?{" "}
          <Link className="sign-up" to="/signup">
            Sign up
          </Link>
        </p>
      </main>
    </>
  );
};

export default Login;



