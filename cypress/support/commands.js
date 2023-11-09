// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//const fs = require('fs-extra')
Cypress.Commands.add('loginAndSetCookie', (url, cookieN, cookieV) => {
    cy.visit(url)
    cy.setCookie(cookieN, cookieV)
});


Cypress.Commands.add('loginAndSetLocalStorage', () => {
 
cy.request({
  method: 'POST',
  url: 'http://5.189.186.217/api/auth/login',
  body: {
      email: 'istg91@aol.com',
      password: 'qwedsa'
  },
}).
// then((response) => {
//     fs.writeFileSync('check_token.json', JSON.stringify(response))
// })
then((response) => {
  const accessToken = response.body.token;
 // fs.writeFileSync('token.json', JSON.stringify(accessToken))
  // Store the access token in local
  localStorage.setItem('auth-token', accessToken);
  //fs.writeFileSync('token.json', JSON.stringify(accessToken))
});
})

Cypress.Commands.add('createNewCategory', (category) => {

  const accessToken = window.localStorage.getItem('auth-token')
  
  cy.request({
      method: 'POST',
      url: 'http://5.189.186.217/api/category',
      body: {
          name: category
      },
      headers: {
          authorization: `${accessToken}`
      }
  }).then((response) => {
      // steps fot getting the category id for the next iterations
      const categoryId = response.body._id;
// Store the categoryId in Cypress environment variable
      Cypress.env('categoryId', categoryId);

      return response.body
  })
})


Cypress.Commands.add('createProduct', (position) => {

  const accessToken = window.localStorage.getItem('auth-token');
  const categoryId = Cypress.env('categoryId');

  cy.request({
      method: 'POST',
      url: 'http://5.189.186.217/api/position',
      body: {
          category: categoryId,
          cost: 1,
          name: position
      },
      headers: {
          authorization: `${accessToken}`
      }
  }).then((response) => {
      return response.body
  })
})

Cypress.Commands.add('removeCategoryById', () => {
  const accessToken = window.localStorage.getItem('auth-token');
  const categoryId = Cypress.env('categoryId');

  cy.request({
    method: 'DELETE',
    url: `http://5.189.186.217/api/category/${categoryId}`,
    headers: {
      authorization: `${accessToken}`
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
  })
})

// fetch("http://5.189.186.217/api/category", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "ru,ru-RU;q=0.9,en-US;q=0.8,en;q=0.7",
//     "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlzdGc5MUBhb2wuY29tIiwidXNlcklkIjoiNjUzN2Y1OGUxNDZhMjgxOTliNTM2NGFmIiwiaWF0IjoxNjk4NjY0MjM3LCJleHAiOjE2OTg2Njc4Mzd9.CQxrAsjsqOeEU-SuUKT-22M2-EF9Y0uMvaGp0qG9sL0",
//     "cache-control": "no-cache",
//     "content-type": "multipart/form-data; boundary=----WebKitFormBoundary6DF3T2Y6mmCwFpfo",
//     "pragma": "no-cache",
//     "Referer": "http://5.189.186.217/categories/new",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": "------WebKitFormBoundary6DF3T2Y6mmCwFpfo\r\nContent-Disposition: form-data; name=\"name\"\r\n\r\nkkk\r\n------WebKitFormBoundary6DF3T2Y6mmCwFpfo--\r\n",
//   "method": "POST"
// });



// fetch("http://5.189.186.217/api/position", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "ru,ru-RU;q=0.9,en-US;q=0.8,en;q=0.7",
//     "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlzdGc5MUBhb2wuY29tIiwidXNlcklkIjoiNjUzN2Y1OGUxNDZhMjgxOTliNTM2NGFmIiwiaWF0IjoxNjk4NjY0MjM3LCJleHAiOjE2OTg2Njc4Mzd9.CQxrAsjsqOeEU-SuUKT-22M2-EF9Y0uMvaGp0qG9sL0",
//     "cache-control": "no-cache",
//     "content-type": "application/json",
//     "pragma": "no-cache",
//     "Referer": "http://5.189.186.217/categories/new",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": "{\"name\":\"ppp\",\"cost\":3,\"category\":\"653f90cc146a28199b538a66\"}",
//   "method": "POST"
// });



// Cypress.Commands.add('saveUrlsToJson', (urls) => {
//   const filePath = Cypress.env('jsonFilePath');

//   cy.task('saveUrlsToJson', { filePath, urls });
// });

