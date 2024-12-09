import React from 'react';
import FreeRecipeCollection from '../../src/pages/FreeRecipeCollection'; // Adjust path as necessary
import { BrowserRouter } from 'react-router-dom';

describe('FreeRecipeCollection Component', () => {
    beforeEach(() => {
      // Visit the page containing the FreeRecipeCollection component
      cy.mount(
        <BrowserRouter>
        <FreeRecipeCollection />
      </BrowserRouter>
      )
    });
  
    it('renders the main title correctly', () => {
      cy.contains('Free Recipe Collection').should('exist');
    });
  
    it('renders all category titles correctly', () => {
      const categoryTitles = ['Non-Veg Recipes', 'Veg Recipes', 'Vegan Recipes'];
      categoryTitles.forEach((title) => {
        cy.contains(title).should('exist');
      });
    });
  
    it('displays all recipes under each category', () => {
      const recipes = [
        'Grilled Chicken Salad',
        'Beef Stir Fry',
        'Pork Chops with Apples',
        'Shrimp Tacos',
        'Chicken Curry',
        'Vegetable Stir Fry',
        'Pasta Primavera',
        'Stuffed Bell Peppers',
        'Chickpea Salad',
        'Vegetable Soup',
        'Vegan Buddha Bowl',
        'Chickpea Curry',
        'Vegan Tacos',
        'Quinoa Salad',
        'Vegan Banana Bread',
      ];
  
      recipes.forEach((recipe) => {
        cy.contains(recipe).should('exist');
      });
    });
  
    it('expands and collapses recipe details on click', () => {
      const recipeName = 'Grilled Chicken Salad';
  
      // Click to expand
      cy.contains(recipeName).click();
      cy.get('.MuiAccordion-root.Mui-expanded').should('exist');
      cy.contains('A healthy mix of grilled chicken, greens, and vinaigrette.').should('exist');
  
      // Click to collapse
      cy.contains(recipeName).click();
      cy.get('.MuiAccordion-root.Mui-expanded').should('not.exist');
    });
  

    it('ensures recipe full details are displayed correctly', () => {
      const recipeName = 'Grilled Chicken Salad';
  
      // Expand the recipe
      cy.contains(recipeName).click();
  
      // Validate recipe details
      cy.contains('Ingredients:').should('exist');
      cy.contains('Instructions:').should('exist');
      cy.contains('1 chicken breast').should('exist');
      cy.contains('Preheat grill to medium-high heat.').should('exist');
    });
  
    it('maintains accessibility by using correct headings and roles', () => {
      // Check for main title as an h4
      cy.get('h4').should('contain', 'Free Recipe Collection');
  
      // Check for category titles as h5
      cy.get('h5').each(($h5) => {
        cy.wrap($h5).should('not.be.empty');
      });
  
      // Verify accordion role
      cy.get('[role="button"]').each(($button) => {
        cy.wrap($button).should('have.attr', 'aria-expanded');
      });
    });
  

  });
  