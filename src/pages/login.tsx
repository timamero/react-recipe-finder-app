/*
 * User log in form
 * 
 * Resources:
 * https://firebase.google.com/docs/auth/web/password-auth?authuser=1
 * https://firebase.google.com/docs/emulator-suite
*/ 
import React, { useState } from 'react';
import { Container, Typography, Input, Button } from "@mui/material";
import { signInWithEmailAndPassword, connectAuthEmulator, setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from '../firebasedb';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Firebase authentication - sign in user
    setPersistence(auth, browserLocalPersistence)
    if (process.env.NODE_ENV === 'test') {
      // During testing, connect to the Authentication Emulator
      connectAuthEmulator(auth, "http://localhost:9099");
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('user successfully signed in',user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error code: ', errorCode);
        console.log('error message: ', errorMessage)
      });
    
    // clear inputs
    setEmail('')
    setPassword('')
  }

  return (
    <Container max-width="sm">
      <Typography variant="h2">Log In</Typography>
      <form onSubmit={handleRegisterSubmit}>
        <Input 
          id="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}/>
        <Input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}/>
        <Button type="submit" variant="contained">Log In</Button>
      </form>
    </Container>
  )
}