//const navbarElement = 'body > .navbar';
const headElement = 'body > .b-head';

const navMenu = {
  verifyElements() {
    //cy.get(navbarElement).find('#navbar').should('be.visible');
 // },
 cy.get(b-headElement).find('#b-head').should('be.visible');
 },
  switchToQueryingPage() {
    cy.get(b-headElement).find('#b-head ul > li:first').click();
  }
}
module.exports = navMenu;