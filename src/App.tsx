import React from 'react';
import Typeography from '@mui/material/Typography'
import Home from './pages/Home'
import LogIn from './pages/LogIn';
import Register from './pages/Register'
import './firebasedb';


function App() {
  return (
    <div className="App">
      <Typeography variant="h1">Cravings</Typeography>
      <Home />
      <LogIn />
      <Register />
    </div>
  );
}

export default App;
