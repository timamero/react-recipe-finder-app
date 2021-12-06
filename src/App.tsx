/*
 * App
 * 
 * Resources:
 * https://reactrouterdotcom.fly.dev/docs/en/v6/getting-started/installation#basic-installation
*/
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import LogIn from './pages/LogIn';
import Register from './pages/Register'
import './firebasedb';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
