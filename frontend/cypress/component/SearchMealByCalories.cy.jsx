import React from 'react';
import SearchMealByCalories from '../../src/pages/SearchMealByCalories'; // Adjust path as necessary




describe('MealPrepIdeas Component', () => {
    const BASE_URL = 'http://localhost:8080';
  
    beforeEach(() => {
      cy.mount(<SearchMealByCalories />); // Adjust route if necessary
    });
  
    it('should display a loading spinner while fetching meals', () => {
      cy.intercept('GET', `${BASE_URL}/mealByType`, {
        delay: 1000, // Simulate network delay
        body: { 'Meal Details': [] },
      }).as('fetchMeals');
      cy.mount(<SearchMealByCalories />);
      cy.get('[role="progressbar"]').should('be.visible'); // Ensure loading spinner is shown
      cy.wait('@fetchMeals');
      cy.get('[role="progressbar"]').should('not.exist');
    });
  
    it('should display an error message when the API request fails', () => {
      cy.intercept('GET', `${BASE_URL}/mealByType`, {
        statusCode: 500, // Simulate server error
        body: {},
      }).as('fetchError');
      cy.mount(<SearchMealByCalories />);
      cy.wait('@fetchError');
      cy.contains('Meal Not found in particular Requirements').should('be.visible');
    });
  
    it('should display "No meals found" when the API response is empty', () => {
      cy.intercept('GET', `${BASE_URL}/mealByType`, {
        body: { 'Meal Details': [] },
      }).as('fetchEmpty');
      cy.mount(<SearchMealByCalories />);
      cy.wait('@fetchEmpty');
      cy.contains('No meals found for the specified criteria.').should('be.visible');
    });
  
    it('should display a list of meals correctly', () => {
      cy.intercept('GET', `${BASE_URL}/mealByType`, {
        body: {
          'Meal Details': [
            {
              mealName: 'Grilled Chicken Salad',
              mealType: 'Lunch',
              calories: 400,
              protein: 35,
              carbohydrates: 10,
              fats: 15,
            },
            {
              mealName: 'Oatmeal with Berries',
              mealType: 'Breakfast',
              calories: 250,
              protein: 10,
              carbohydrates: 45,
              fats: 5,
            },
          ],
        },
      }).as('fetchMeals');
      cy.mount(<SearchMealByCalories />);
      cy.wait('@fetchMeals');
      cy.contains('Grilled Chicken Salad (Lunch)').should('be.visible');
      cy.contains('Oatmeal with Berries (Breakfast)').should('be.visible');
    });
});