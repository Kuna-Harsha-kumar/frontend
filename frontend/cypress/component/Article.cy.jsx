import React from 'react';
import Trainers from '../../src/pages/Trainers'; // Adjust path as necessary

describe('TrainersPage Component', () => {
  // Test Case 1: Ensure the page renders with trainer cards

  // Test Case 2: Test the "View Profile" button functionality
  it('should open the modal with trainer details when "View Profile" is clicked', () => {
    cy.mount(<Trainers/>);

    // Click on the "View Profile" button for John Doe
    cy.contains('View Profile').first().click();

    // Assert that the modal opens
    cy.get('div.MuiModal-root').should('be.visible');
    
    // Check that the modal contains correct trainer details
    cy.get('h4').contains('John Doe').should('be.visible');
    cy.get('p').contains('John specializes in strength training').should('be.visible');
    cy.get('img').should('have.attr', 'src').and('include', 'https://randomuser.me/api/portraits/men/32.jpg');
  });

  // Test Case 3: Test the modal close functionality
  it('should close the modal when the "Close" button is clicked', () => {
    cy.mount(<Trainers/>);

    // Open the modal by clicking on the "View Profile" button for John Doe
    cy.contains('View Profile').first().click();

    // Assert that the modal is open
    cy.get('div.MuiModal-root').should('be.visible');

    // Click the "Close" button in the modal
    cy.contains('Close').click();

    // Assert that the modal is closed
    cy.get('div.MuiModal-root').should('not.exist');
  });

});
