/*
 * User registration form
 * 
 * Resources:
 * https://github.com/firebase/firebaseui-web
 * https://firebase.google.com/docs/auth/web/password-auth#before_you_begin
*/ 

import { Container, Typography, Input, Button } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const handleRegisterSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    // Firebase authentication - create new user and sign in
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error code: ', errorCode);
        console.log('error message: ', errorMessage)
    });
    
    // clear inputs
    target.email.value = '';
    target.password.value = '';
  }

  return (
    <Container max-width="sm">
      <Typography variant="h2">Create an account</Typography>
      <form onSubmit={handleRegisterSubmit}>
        <Input 
          id="email"
          type="email"
          placeholder="email"
          required={true}/>
        <Input
          id="password"
          type="password"
          placeholder="password"
          required={true}/>
        <Button type="submit" variant="contained">Register</Button>
      </form>
    </Container>
  )
}