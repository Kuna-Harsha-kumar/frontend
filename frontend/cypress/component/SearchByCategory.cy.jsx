import React from 'react';
import SearchByCategory from '../../src/pages/SearchBycategory'; // Adjust path as necessary


describe('CategoryExercises Component', () => {
  const API_URL = 'http://localhost:8080/categoryExercises';

  beforeEach(() => {
    cy.intercept('GET', `${API_URL}`, { body: { 'Category Exercises:': [] } }).as('fetchDefault');
    cy.intercept('GET', `${API_URL}?category=*`, { body: { 'Category Exercises:': [] } }).as('fetchWithCategory');
    cy.mount(<SearchByCategory />); // Update this route as needed
  });

  it('should display a loading spinner while data is being fetched', () => {
    cy.intercept('GET', API_URL, {
      delay: 1000,
      body: [],
    }).as('fetchExercises');
    cy.mount(<SearchByCategory />);
    cy.get('[role="progressbar"]').should('be.visible');
    cy.wait('@fetchExercises');
    cy.get('[role="progressbar"]').should('not.exist');
  });

  it('should display an error message when API request fails', () => {
    cy.intercept('GET', API_URL, {
      statusCode: 500,
      body: {},
    }).as('fetchError');
    cy.mount(<SearchByCategory />);
    cy.wait('@fetchError');
    cy.contains('No exercises found').should('be.visible');
  });

  it('should display no exercises message when the list is empty', () => {
    cy.wait('@fetchDefault');
    cy.contains('No exercises found').should('be.visible');
  });

  it('should display exercises correctly when data is available', () => {
    cy.intercept('GET', API_URL, {
      body: {
        'Category Exercises:': [
          { id: 1, exerciseName: 'Push-ups', category: 'Fitness', duration: 15 },
          { id: 2, exerciseName: 'Yoga', category: 'Wellness', duration: 30 },
        ],
      },
    }).as('fetchExercises');
    cy.mount(<SearchByCategory />);
    cy.wait('@fetchExercises');

    cy.contains('Push-ups (Fitness)').should('be.visible');
    cy.contains('Yoga (Wellness)').should('be.visible');
  });


  it('should render exercise details correctly', () => {
    cy.intercept('GET', API_URL, {
      body: {
        'Category Exercises:': [
          { id: 1, exerciseName: 'Push-ups', category: 'Fitness', duration: 15 },
        ],
      },
    }).as('fetchDetails');
    cy.mount(<SearchByCategory />);
    cy.wait('@fetchDetails');

    cy.contains('Push-ups (Fitness)').should('be.visible');
    cy.contains('This exercise has the following duration:').should('be.visible');
    cy.contains('Duration: 15 minutes').should('be.visible');
  });
});
