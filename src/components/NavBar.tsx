/*
 * Navigation Menu
 * 
*/ 
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Container, Typography, AppBar, Toolbar, Button } from "@mui/material";
import { AuthContext } from '../App';
import { auth } from '../firebasedb';


export default function NavBar() {
  const user = useContext(AuthContext);

  const handleLogout = () => {
    auth.signOut()
    window.location.reload()
  }

  return (
    <Container max-width="sm">
      <AppBar position="static">
        <Toolbar>     
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
            Cravings Recipe Finder
            </Link>
          </Typography>
          {user
            ?
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
            :
            <div>
              <Button color="inherit">
                <Link to="/login">Login</Link>
              </Button>
              <Button color="inherit">
                <Link to="/register">Register</Link>
              </Button>
            </div>
          }
        </Toolbar>
      </AppBar>
    </Container>
  )
}