const navMenu = require('./Precond');

const menuElement = 'body > .b-head';

const header = {
  verifyElements() {
    cy.get(menuElement).find('.container header').should('be.visible');
    navMenu.verifyElements();
  }
}
module.exports = header;
