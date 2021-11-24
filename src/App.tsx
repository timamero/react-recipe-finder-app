import React from 'react';
import Register from './pages/register';
import LogIn from './pages/login'
import './firebasedb'


function App() {
  return (
    <div className="App">
      <h1>Cravings</h1>
      <LogIn />
      <Register />
    </div>
  );
}

export default App;
