/// <reference types="cypress" />

describe ('login with api request', () => {

beforeEach(() => {
    cy.loginAndSetLocalStorage()
})

it('send login data', () => {
    cy.visit('http://5.189.186.217/overview')
    cy.get('div.card-content', {timeout: 5000}).eq(0).should('be.visible')
})

it('Create category', () => {
    cy.createNewCategory('soap')
    cy.visit('http://5.189.186.217/categories')
    cy.get('.content a.collection-item', {timeout: 5000}).should('be.visible')
})

})