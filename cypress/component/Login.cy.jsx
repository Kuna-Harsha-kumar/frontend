import React from 'react';
import Login from '../../src/pages/Login'; // Adjust path as necessary
import { BrowserRouter } from 'react-router-dom';

describe('Login Page Tests', () => {
    beforeEach(() => {
      // Visit the Login Page before each test
      cy.mount(
        <BrowserRouter>
        <Login />
      </BrowserRouter>
      )
    });
  

    it('should validate empty email and password fields', () => {
      // Click Sign in without entering any data
      cy.get('button[type="submit"]').click();
  
      // Email validation error appears
      cy.contains('Please enter a valid email address.').should('exist');
    });
  
  
  
    it('should navigate to signup page when clicking "Sign up"', () => {
      // Click on the "Sign up" link
      cy.contains('Sign up').click();
  
      // Verify navigation to the signup page
      cy.url().should('include', '/signup');
    });
  
    it('should show terms and privacy policy text', () => {
      // Verify the presence of terms and privacy text
      cy.contains('By signing in, you agree to our').should('exist');
      cy.contains('Terms & Privacy Policy').should('exist');
    });
  });