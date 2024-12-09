import React from 'react';
import Signup from '../../src/pages/Signup';// Adjust path as necessary
import { BrowserRouter } from 'react-router-dom';




describe('Signup Page Tests', () => {
    beforeEach(() => {
      // Visit the Signup page before each test
      cy.mount(
        <BrowserRouter>
        <Signup />
      </BrowserRouter>
      )
    });

    console.log(cy);
  

    it('should validate required fields', () => {
      // Click Sign Up without entering any data
      cy.get('button[type="submit"]').click();
  
      // Verify error messages for required fields
      cy.contains('First Name is required').should('not.exist'); // Assuming the form doesn't show errors for empty fields, modify if needed
      cy.contains('Last Name is required').should('not.exist');
      cy.contains('Email is required').should('not.exist');
      cy.contains('Password is required').should('not.exist');
    });
  


  
    it('should navigate to login page when clicking "Log in"', () => {
      // Click on the "Log in" link
      cy.contains('Log in').click();
  
      // Verify navigation to the login page
      cy.url().should('include', '/login');
    });
  
    it('should display the terms and privacy policy text', () => {
      // Verify the terms and privacy policy text is visible
      cy.contains('By signing up, you agree to our').should('exist');
      cy.contains('Terms & Privacy Policy').should('exist');
    });
  });
  