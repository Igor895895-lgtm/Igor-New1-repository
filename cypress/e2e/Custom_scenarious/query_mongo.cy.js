const { ObjectId } = require ("mongodb")


describe('Find Data', () => {
    context('usage of mongodb', () => { 
    it('findmany', () => {
        cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
         cy.task('log', mongoresult)   
        })
    })

        it('login by UI', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/users/authenticate',
                body: {username:"qas", password:"qwe123"},
            }).then((response) => {
    const authToken = response.body.token
    Cypress.env('authTNext13', authToken)
})
})

    it('create user', () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/users/register',
        headers: {
           Authorization: `Bearer ${Cypress.env('authNext13')}`
        },
       body: {
        firstName: 'ttg12224',
        lastName: 'ttg12224',
        username: 'ttgr12224',
        password: 'qwe123'
    }
})
})


it('findmany', () => {
    cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
     cy.task('log', mongoresult)   
    })
})
})
})