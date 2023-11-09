//const navbarElement = 'body > .navbar';
//const headElement = 'body > .b-head';

const headElement = 'body > .b-head';

const navMenu  = {
  verifyElements() {
    cy.get(headElement).find('#b-head').should('be.visible');
  },
  switchToQueryingPage() {
    cy.get(headElement).find('#b-head ul > li:first').click();
    cy.get(headElement).find('#b-head ul > li:first > .dropdown-menu li:first').click();
  }
}
module.exports = navMenu;

