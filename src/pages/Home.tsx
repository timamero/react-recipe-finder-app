/*
 * Home page
 * 
*/ 
import React, { useContext } from 'react';
import { Container, Typography } from "@mui/material";
import { AuthContext } from '../App';

export default function Home() {
  const user = useContext(AuthContext);

  return (
    <Container max-width="sm">
      {user
        ?
        <Typography variant="h1">Search for a recipe!</Typography>
        :
        <Typography variant="h1">Create an account to get started!</Typography>
      }
    </Container>
  )
}