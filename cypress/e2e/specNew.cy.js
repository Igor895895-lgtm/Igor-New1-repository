describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('check pricing cypress', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');

    cy.get('[data-cy="pricing-annually-top"] > .flex').click();
    cy.get('.icon-light-transparent > .icon-dark-stroke').click();
    cy.get('#Annually-top').check();
    cy.get('[data-cy="pricing-annually-top"]').click();
    cy.get('#Annually-top').check();
    cy.get('[data-cy="pricing-annually-top"]').click();
    cy.get('#Annually-top').check();
    cy.get('[data-cy="pricing-hero-switches"] > .sm\\:w-\\[116px\\] > .border-1 > .absolute > .icon-dark').click();
    cy.get('[data-cy="pricing-hero-switches"] > .sm\\:w-\\[116px\\] > .border-1 > .absolute').click();
    cy.get('[data-cy="pricing-annually-top"] > .flex').click();
    cy.get('#Annually-top').check();
    cy.get('[data-cy="pricing-annually-top"]').click();
    cy.get('#Annually-top').check();
    cy.get('[data-cy="pricing-annually-top"] > .flex').click();
    cy.get('#Annually-top').check();
    cy.get(':nth-child(3) > .mb-\\[8px\\]').click();
    cy.get(':nth-child(3) > .mb-\\[8px\\]').should('have.text', 'Business');
    /* ==== End Cypress Studio ==== */
  });
})