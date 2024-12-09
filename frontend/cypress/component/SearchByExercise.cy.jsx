import React from 'react';
import SearchByExercise from '../../src/pages/SearchByExercise'; // Adjust path as necessary



describe('CategoryExercises Component', () => {
    const BASE_URL = 'http://localhost:8080';
  
    beforeEach(() => {
        cy.mount(<SearchByExercise />); // Adjust the route if needed
    });
  
    it('should display a loading spinner while data is being fetched', () => {
      cy.intercept('GET', `${BASE_URL}/categoryExercises`, {
        delay: 1000, // Simulate delay
        body: { 'Exercises:': [] },
      }).as('fetchExercises');
      cy.mount(<SearchByExercise />);
      cy.get('[role="progressbar"]').should('be.visible'); // CircularProgress
      cy.wait('@fetchExercises');
      cy.get('[role="progressbar"]').should('not.exist');
    });
  
    it('should display an error message if API request fails', () => {
      cy.intercept('GET', `${BASE_URL}/categoryExercises`, {
        statusCode: 500, // Simulate server error
        body: {},
      }).as('fetchError');
      cy.mount(<SearchByExercise />);
      cy.wait('@fetchError');
      cy.contains('No exercises found').should('be.visible');
    });
  
    it('should display "No exercises found" when the response is empty', () => {
      cy.intercept('GET', `${BASE_URL}/categoryExercises`, {
        body: { 'Exercises:': [] },
      }).as('fetchEmpty');
      cy.mount(<SearchByExercise />);
      cy.wait('@fetchEmpty');
      cy.contains('No exercises found').should('be.visible');
    });
  
    it('should display a single exercise correctly', () => {
      cy.intercept('GET', `${BASE_URL}/categoryExercises`, {
        body: {
          'Exercises:': {
            id: 1,
            exerciseName: 'Yoga',
            category: 'Wellness',
            duration: 30,
          },
        },
      }).as('fetchSingleExercise');
      cy.mount(<SearchByExercise />);
      cy.wait('@fetchSingleExercise');
      cy.contains('Yoga (Wellness)').should('be.visible');
      cy.contains('Duration: 30 minutes').should('be.visible');
    });
  
    it('should display multiple exercises correctly', () => {
      cy.intercept('GET', `${BASE_URL}/categoryExercises`, {
        body: {
          'Exercises:': [
            { id: 1, exerciseName: 'Yoga', category: 'Wellness', duration: 30 },
            { id: 2, exerciseName: 'Push-ups', category: 'Fitness', duration: 15 },
          ],
        },
      }).as('fetchMultipleExercises');
      cy.mount(<SearchByExercise />);
      cy.wait('@fetchMultipleExercises');
      cy.contains('Yoga (Wellness)').should('be.visible');
      cy.contains('Push-ups (Fitness)').should('be.visible');
    });
  
  
    it('should handle API returning non-array "Exercises:" correctly', () => {
      cy.intercept('GET', `${BASE_URL}/categoryExercises`, {
        body: {
          'Exercises:': {
            id: 1,
            exerciseName: 'Pilates',
            category: 'Wellness',
            duration: 40,
          },
        },
      }).as('fetchNonArrayExercises');
      cy.mount(<SearchByExercise />);
      cy.wait('@fetchNonArrayExercises');
      cy.contains('Pilates (Wellness)').should('be.visible');
    });
  
    it('should not crash when the API response is missing "Exercises:"', () => {
      cy.intercept('GET', `${BASE_URL}/categoryExercises`, {
        body: {},
      }).as('fetchNoExercisesKey');
      cy.mount(<SearchByExercise />);
      cy.wait('@fetchNoExercisesKey');
      cy.contains('No exercises found').should('be.visible');
    });
  });
  