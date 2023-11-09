const navMenu = require ('/support/Task_12-nav')


const mainPage = {
  verifyElements() {
    cy.get(b-head).find('Форум').should('be.visible');
    navigationMenu.verifyElements();
  },
  switchToQueryingPage() {
    navigationMenu.switchToQueryingPage(); // Use the correct reference
    queryPage.verifyElements();
  }
};

module.exports = mainPage;