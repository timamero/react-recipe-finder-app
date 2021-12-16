/*
 *
 * Resources:
 * Firebase - Authentication emulator
 * https://firebase.google.com/docs/emulator-suite/connect_auth
 * https://firebase.google.com/docs/emulator-suite/connect_and_prototype?database=Firestore
 * https://firebase.google.com/docs/emulator-suite/install_and_configure
 * 
*/

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { auth } from '../firebase';
import { deleteUser } from 'firebase/auth';
import App from '../App';

beforeEach(() => {
  const user = auth.currentUser;
  if (user) {
    deleteUser(user)
  }
})

describe('App component tests', () => {
  test('Title is rendered', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>)

    expect(screen.getByText('Cravings Recipe Finder')).toBeInTheDocument()
  });

  test('User is redirected to the home page after creating an account', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>)
      
    // Initially, no user is signed in  
    expect(screen.getByText('Create an account to get started!')).toBeInTheDocument()

    // Navigate to the register page
    const registerNavLink = screen.getByText('Register')
    userEvent.click(registerNavLink)
    
    // User types email and password into email and password fields
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByPlaceholderText('password')
    userEvent.type(emailInput, 'jest@example.com')
    userEvent.type(passwordInput, 'testpassword')

    // User submits register form
    const createAccountBtn = screen.getByText('Create Account')
    userEvent.click(createAccountBtn)
  
    const welcomeText = screen.getByText('Search for a recipe!')
    expect(welcomeText).toBeInTheDocument()
  })
})