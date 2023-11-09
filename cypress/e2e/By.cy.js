/// <reference types="cypress" />

describe('Cypress.io Website UI Test', () => {
  it('1. Visit the Cypress.io documentation page', () => {
    // Visit the Cypress.io documentation page
    cy.visit('https://docs.cypress.io/');
  });

  it('2. Click on the "API" link', () => {
    // Find and click on the "API" link in the navigation menu
    cy.get('.navGroup').contains('API').click();
  });

  it('3. Click on the "Commands" link', () => {
    // Find and click on the "Commands" link in the API section
    cy.get('.apiNavGroup').contains('Commands').click();
  });

  it('4. Click on the "eq" command', () => {
    // Find and click on the "eq" command link
    cy.get('.apiNavGroup').contains('eq').click();
  });

  it('5. Verify that the "eq" command documentation is loaded', () => {
    // Verify that the "eq" command documentation section is displayed
    cy.contains('eq()').should('exist');
  });

  it('6. Fill data in the search input', () => {
    // Find the search input and type 'Cypress.io'
    cy.get('.search-form').find('input').type('Cypress.io');
  });

  it('7. Submit the search form', () => {
    // Find and submit the search form
    cy.get('.search-form').submit();
  });

  it('8. Verify search results', () => {
    // Verify that search results are displayed
    cy.contains('Search results for: Cypress.io').should('exist');
  });

  it('9. Use the "eq" command to click on a specific link', () => {
    // Use the "eq" command to click on the third search result link
    cy.get('.search-results a').eq(2).click();
  });

  it('10. Verify the content of the clicked page', () => {
    // Verify that you are on the clicked page and check for specific content
    cy.contains('Welcome to Cypress.io').should('exist');
  });
});