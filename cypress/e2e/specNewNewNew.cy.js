describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('To Check Cypress Pricinggg', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('#\\32 35c0f64-29a0-4c9b-9247-537ec3397b8c').click();
    cy.get('.osano-cm-dialog__close > svg').click();
    cy.get(':nth-child(5) > .nav-bar-link').click();
    cy.get('[data-cy="pricing-annually-top"]').should('have.text', ' Annually  Save 11% ');
    cy.get(':nth-child(3) > .mb-\\[8px\\]').should('have.text', 'Business');
    cy.get('[data-cy="pricing-plan-free"]').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
})