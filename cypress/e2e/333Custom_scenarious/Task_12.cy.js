
const navMenu = require('../../support/Precond');
const header = require('../../support/Precond2');

const menuElement = 'body > .b-head';

export const mainPage = {
  verifyElements() {
    cy.get(menuElement).find('.container header').should('be.visible');
    navMenu.verifyElements();
  },
  switchToQueryingPage() {
    navMenu.switchToQueryingPage();
    header.verifyElements();
  }
}