const { ObjectId } = require ("mongodb")

/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');
describe('Find Data', () => {
    context('usage of mongodb', () => { 
})
})
    it('create user', () => {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const username = faker.internet.userName();
        const password = faker.internet.password();
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/users/register',
        headers: {
           Authorization: `Bearer ${Cypress.env('authNext12')}`
        },
       body: {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
    }
})
})

it('findmany', () => {
    cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
     cy.task('log', mongoresult)   
    })
})