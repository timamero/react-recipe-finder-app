/*
 * App
 * 
 * Resources:
 * https://reactrouterdotcom.fly.dev/docs/en/v6/getting-started/installation#basic-installation
*/
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AppHome from './pages/AppHome';
import LogIn from './pages/LogIn';
import Register from './pages/Register'
import { auth } from './firebase';
import NavBar from './components/NavBar';
import { User, AuthContext } from './context/auth';
import { onAuthStateChanged, setPersistence, browserLocalPersistence } from 'firebase/auth';

export default function App() {
  const [currentUser, setCurrentUser] = useState(User);

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
    .then(() => onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        console.log('user is not logged in')
      }
    }))
  }, [])

  return (
    <AuthContext.Provider value={currentUser}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<AppHome />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}