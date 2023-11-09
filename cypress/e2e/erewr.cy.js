describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('14766', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://docs.cypress.io/');
    cy.get('[href="/api/table-of-contents"]').click();
    cy.get('.table-of-contents__link--active').click();
    cy.get(':nth-child(10) > tbody > :nth-child(6) > :nth-child(1) > a > code').click();
    cy.get('.DocSearch-Button-Placeholder').click();
    cy.get('#docsearch-input').clear('query');
    cy.get('#docsearch-input').type('queries');
    cy.get('#docsearch-item-3 > a > .DocSearch-Hit-Container > .DocSearch-Hit-content-wrapper > .DocSearch-Hit-title > mark').click();
    cy.get('#Queries').click();
    cy.get('#Queries').should('have.text', 'Queries​');
    /* ==== End Cypress Studio ==== */
  });
})