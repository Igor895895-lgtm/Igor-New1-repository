describe('Example Test', () => {
  it('Save URLs to JSON', () => {
    const urlsToSave = [
      'https://www.guru99.com/junit-tutorial.html',
      'https://www.guru99.com/selenium-tutorial.html',
    ];

    cy.task('saveUrlsToJson', {
      filePath: Cypress.env('jsonFilePath'),
      urls: urlsToSave,
    });
  });
});
