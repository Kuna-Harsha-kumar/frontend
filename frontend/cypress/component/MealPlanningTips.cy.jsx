import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MealPlanningTips from '../../src/pages/MealPlanningTips';

describe('Meal Planning Tips Page', () => {
    beforeEach(() => {
      cy.mount(
        <BrowserRouter>
        <MealPlanningTips />
      </BrowserRouter>
       ) // Assuming the component is accessible from the root URL or change it accordingly
      });
  
    it('should load the page correctly', () => {
      // Ensure the page loads without errors
      cy.url().should('include', '/MealPlanningTips'); // Ensure it visits the correct page
    });
  
    it('should display the main heading', () => {
      // Check if the main heading is displayed
      cy.get('h4').should('have.text', 'Meal Planning Tips');
    });
  
    it('should display the section titles', () => {
      // Check if each section title is displayed
      cy.contains('h5', 'Gaining Muscle Mass').should('be.visible');
      cy.contains('h5', 'Losing Fat').should('be.visible');
      cy.contains('h5', 'Body Recomposition').should('be.visible');
    });
  
  
    it('should display dividers between sections', () => {
      // Ensure dividers are visible between sections
      cy.get('.MuiDivider-root').should('have.length', 2); // Two dividers between sections
    });
  });
  