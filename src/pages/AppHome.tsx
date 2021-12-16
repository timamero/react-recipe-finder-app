/*
 * App Home page
 * 
*/ 
import React from 'react';
import { Container, Typography } from "@mui/material";

export default function AppHome() {
  return (
    <Container max-width="sm">
      <Typography variant="h1">Search for a recipe!</Typography>
    </Container>
  )
}