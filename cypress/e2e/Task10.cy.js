describe('template spec', () => {

  it('Task 10', function() {

    cy.visit('https://docs.cypress.io/');
    cy.get('.osano-cm-accept-all').click();
    cy.get('[href="/api/table-of-contents"]').click();
    cy.get('.table-of-contents__link--active').click();
    cy.get(':nth-child(10) > tbody > :nth-child(6) > :nth-child(1) > a > code').click();
    cy.get('.DocSearch-Button-Placeholder').should('be.visible');
    cy.get('.DocSearch-Button-Placeholder').click();
    cy.get('#docsearch-input').clear();
    cy.get('#docsearch-input').type('Queries');
    cy.get('.DocSearch-HitsFooter > a').click();
    cy.get('#__docusaurus_skipToContent_fallback').click();
    cy.get('h1').should('be.visible');
    cy.get('.searchQueryInput_u2C7').should('have.class', 'searchQueryInput_u2C7');
    cy.get('.col--8').click();
    cy.get('.col--8').should('have.class', 'searchResultsColumn_JPFH');
  });
})