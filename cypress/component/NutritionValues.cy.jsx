import React from 'react';
import NutritionalValues from '../../src/pages/NutritionalValues'; // Adjust path as necessary



describe('NutritionalValues Component', () => {
    beforeEach(() => {
      // Mount the NutritionalValues component before each test
      cy.mount(<NutritionalValues />);
    });
    // Test 4: Verify table rendering for all categories
    it('renders tables for all categories with correct structure', () => {
      ['Non-Veg', 'Veg', 'Vegan'].forEach((category) => {
        cy.contains(category).should('be.visible');
  
        // Check table structure
        cy.contains(category).parent().within(() => {
          cy.get('table').should('be.visible');
          cy.get('th').contains('Food Item').should('be.visible');
          cy.get('th').contains('Carbs').should('be.visible');
          cy.get('th').contains('Protein').should('be.visible');
          cy.get('th').contains('Fat').should('be.visible');
        });
      });
    });
  
  
    // Test 6: Verify nutritional data accuracy for a specific item
    it('displays accurate nutritional data for a specific item', () => {
      cy.contains('Quinoa').parent().within(() => {
        cy.contains('21 g').should('be.visible'); // Carbs
        cy.contains('4 g').should('be.visible'); // Protein
        cy.contains('2 g').should('be.visible'); // Fat
      });
    });
  });
  