/*
 * Navigation Menu
 * 
*/ 
import React from 'react';
import { Link } from "react-router-dom";
import { Container, Typography, AppBar, Toolbar, IconButton, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';

export default function NavBar() {
  return (
    <Container max-width="sm">
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
            Cravings Recipe Finder
            </Link>
          </Typography>
          
          <Button color="inherit">
            <Link to="/login">Login</Link>
          </Button>
          <Button color="inherit">
            <Link to="/register">Register</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  )
}