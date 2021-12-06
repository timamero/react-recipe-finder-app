import React from 'react';
import Typeography from '@mui/material/Typography'
import Home from './pages/Home'
import Register from './pages/register';
import LogIn from './pages/login';
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
