const bannerElement = 'body > .banner';

const queryPage = {
  verifyElements() {
    cy.get(bannerElement).find('.container h1').should('be.visible');
  }
};

module.exports = queryPage;