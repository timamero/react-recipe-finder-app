/*
 * App
 * 
 * Resources:
 * https://reactrouterdotcom.fly.dev/docs/en/v6/getting-started/installation#basic-installation
*/
import React, { useState, useEffect, createContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import LogIn from './pages/LogIn';
import Register from './pages/Register'
import { auth } from './firebasedb';
import NavBar from './components/NavBar';
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext<string | null>('')

function App() {
  const [currentUser, setCurrentUser] = useState<string | null>('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.email)
      } else {
        console.log('user is not logged in')
      }
    });
  }, [])

  return (
    <AuthContext.Provider value={currentUser}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
