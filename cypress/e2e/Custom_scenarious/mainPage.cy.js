// import { navMenu } from './navigationMenu';
// import { queryPage } from './queryPage';

const navMenu = require ('../../support/navigationMenu')
const queryPage = require ('../../support/queryPage')

const bannerElement = 'body > .banner';

const mainPage = {
  verifyElements() {
    cy.get(bannerElement).find('.container h1').should('be.visible');
    navigationMenu.verifyElements(); // Use the correct reference
  },
  switchToQueryingPage() {
    navigationMenu.switchToQueryingPage(); // Use the correct reference
    queryPage.verifyElements();
  }
};

module.exports = mainPage;