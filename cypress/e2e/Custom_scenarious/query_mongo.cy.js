const { ObjectId } = require ("mongodb")


describe('Find Data', () => {
    //context('usage of mongodb', () => {
    it('findmany', () => {
        cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
         cy.task('log', mongoresult)   
        })
    })
})
//})

// context.skip('UI & API request'), () => {

// it('create user', () => {
// cy.request(
//     method: 'POST',
//     url: 'api/users/registration',
//     headers: {
//        Authorization: 
//     },
//    body: {

//    })
// })
// }