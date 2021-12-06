/*
 * User registration form
 * 
 * Resources:
 * https://github.com/firebase/firebaseui-web
 * https://firebase.google.com/docs/auth/web/password-auth#before_you_begin
 * https://firebase.google.com/docs/emulator-suite
*/ 
import React, { useState } from 'react'
import { Container, Typography, Input, InputLabel, Button } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword, connectAuthEmulator } from "firebase/auth";



export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Firebase authentication - create new user and sign in
    const auth = getAuth();

    if (process.env.NODE_ENV === 'test') {
      // During testing, connect to the Authentication Emulator
      connectAuthEmulator(auth, "http://localhost:9099");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('user', user)
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
      <Typography variant="h2">Create an account</Typography>
      <form onSubmit={handleRegisterSubmit}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input 
          id="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}/>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}/>
        <Button type="submit" variant="contained">Register</Button>
      </form>
    </Container>
  )
}