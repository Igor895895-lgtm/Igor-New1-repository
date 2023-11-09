/// <reference types="cypress" />

context('Location', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/location')
  })

  it('cy.hash() - get the current URL hash', () => {
    // https://on.cypress.io/hash
    cy.hash().should('be.empty')
  })

  it('cy.location() - get window.location', () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('https://example.cypress.io/commands/location')
      expect(location.host).to.eq('example.cypress.io')
      expect(location.hostname).to.eq('example.cypress.io')
      expect(location.origin).to.eq('https://example.cypress.io')
      expect(location.pathname).to.eq('/commands/location')
      expect(location.port).to.eq('')
      expect(location.protocol).to.eq('https:')
      expect(location.search).to.be.empty
    })
  })

  it('cy.url() - get the current URL', () => {
    // https://on.cypress.io/url
    cy.url().should('eq', 'https://example.cypress.io/commands/location')
  })


  context ('Check the cypress', () => {
  it('Open the main page and click', () => {
  cy.visit("/")
    cy.get('astro-island + a[href="https://on.cypress.io"]').click()
    cy.url().should('contain', '/why-cypress')
    cy.get('h1').should('contain.text', 'Why Cypress?')
  })
})
})

//   it('Open the main page and click startupds', () => {
//     cy.origin('https://ain.ua', () => {
//       cy.visit('https://ain.ua')
//     cy.get('#subbody > div.main-content > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div > a:nth-child(1) > h2').click({ force: true });
//     cy.url().should('contain', 'avtorski/')
//   })
// })
