/*
 * User log in form
 * 
 * Resources:
 * https://firebase.google.com/docs/auth/web/password-auth?authuser=1
*/ 

import { Container, Typography, Input, Button } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const handleRegisterSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    // Firebase authentication - sign in user
    const auth = getAuth();
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
    target.email.value = '';
    target.password.value = '';
  }

  return (
    <Container max-width="sm">
      <Typography variant="h2">Log In</Typography>
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
        <Button type="submit" variant="contained">Log In</Button>
      </form>
    </Container>
  )
}