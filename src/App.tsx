import React from 'react';
import Home from './pages/Home'
import Register from './pages/Register';
import LogIn from './pages/LogIn';
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
