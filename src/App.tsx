import React from 'react';
import Home from './pages/Home'
import LogIn from './pages/LogIn';
import Register from './pages/Register'
import './firebasedb';


function App() {
  return (
    <div className="App">
      <Home />
      <LogIn />
      <Register />
    </div>
  );
}

export default App;
