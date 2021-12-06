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
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../App';

describe('App component tests', () => {
  test('Title is rendered', () => {
    render(<App />)

    expect(screen.getByText('Cravings Recipe Finder')).toBeInTheDocument()
  });

  test.skip('User is redirected to the home page after creating an account', () => {
    // before each test, need to delete all users in auth emulator
    render(<App />)
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByPlaceholderText('password')

    userEvent.type(emailInput, 'jest@example.com')
    userEvent.type(passwordInput, 'testpassword')

    // screen.debug(emailInput)
    userEvent.click(screen.getByText('Register'))
    
    //expect(screen.getByText('Home')).toBeInTheDocument()
  })
})