import React from 'react';
import MealPrepIdeas from '../../src/pages/MealPrepIdeas'; // Adjust path as necessar



describe('MealPrepIdeas Component', () => {
    const sampleMeals = [
      {
        mealName: 'Grilled Chicken Salad',
        mealType: 'Lunch',
        calories: 400,
        protein: 30,
        carbohydrates: 20,
        fats: 15,
      },
      {
        mealName: 'Oatmeal with Fruits',
        mealType: 'Breakfast',
        calories: 300,
        protein: 8,
        carbohydrates: 50,
        fats: 5,
      },
    ];
  
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:8080/mealPlans', (req) => {
        req.reply({
          statusCode: 200,
          body: { 'Meal Details': sampleMeals },
        });
      }).as('getMeals');
    });

  
    // Test 2: Handle the error state
    it('displays an error message when API request fails', () => {
      cy.intercept('GET', 'http://localhost:8080/mealPlans', { statusCode: 500 }).as('getMealsError');
      cy.mount(<MealPrepIdeas />);
      cy.wait('@getMealsError');
      cy.contains('Failed to fetch meal data. Please try again later.').should('be.visible'); // Check for the error message
    });
  
    // Test 3: Check for meal cards rendering
    it('renders meal cards when data is successfully fetched', () => {
      cy.mount(<MealPrepIdeas />);
      cy.wait('@getMeals');
  
      // Check for the meal cards
      cy.contains('Grilled Chicken Salad (Lunch)').should('be.visible');
      cy.contains('Oatmeal with Fruits (Breakfast)').should('be.visible');
    });
  
    // Test 4: Check meal details for a single meal card
    it('displays correct nutritional details for each meal', () => {
      cy.mount(<MealPrepIdeas />);
      cy.wait('@getMeals');
  
      // Verify details for the first meal
      cy.contains('Grilled Chicken Salad (Lunch)').parent().within(() => {
        cy.contains('Calories: 400 kcal').should('be.visible');
        cy.contains('Protein: 30 g').should('be.visible');
        cy.contains('Carbohydrates: 20 g').should('be.visible');
        cy.contains('Fats: 15 g').should('be.visible');
      });
  
      // Verify details for the second meal
      cy.contains('Oatmeal with Fruits (Breakfast)').parent().within(() => {
        cy.contains('Calories: 300 kcal').should('be.visible');
        cy.contains('Protein: 8 g').should('be.visible');
        cy.contains('Carbohydrates: 50 g').should('be.visible');
        cy.contains('Fats: 5 g').should('be.visible');
      });
    });
  
    // Test 5: Verify the UI structure of meal cards
    it('ensures that meal cards have consistent styling', () => {
      cy.mount(<MealPrepIdeas />);
      cy.wait('@getMeals');
  
      // Check the structure of the first meal card
      cy.contains('Grilled Chicken Salad (Lunch)')
        .parent()
        .should('have.css', 'background-color', 'rgb(245, 245, 245)') // Check background color
        .and('have.css', 'padding', '24px') // Check padding
        .and('have.css', 'border-radius', '8px'); // Check border radius
    });
  });
  