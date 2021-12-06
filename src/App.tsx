/*
 * App
 * 
 * Resources:
 * https://reactrouterdotcom.fly.dev/docs/en/v6/getting-started/installation#basic-installation
*/
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import LogIn from './pages/LogIn';
import Register from './pages/Register'
import './firebasedb';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
