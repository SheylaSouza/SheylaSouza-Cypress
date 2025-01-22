describe('Starts a game on desktop', () => {

  it('Scenario: User opens the Sports home page', () => {
        // Visit the product page
        cy.visit('https://www.unibet.com/');

      // Calling the login command in your tests
      cy.login('sheylapsouza@gmail.com', 'Sh&yl@25');


      cy.get('a[title="Sports"]') //find the link Sports and opening the screen
      .should('exist')
      .click({ force: true });

      cy.get('[data-test-name="top-picks-header"]') //checking if the rigth screen was opened and the titles are visible
      .contains('Top picks') 
      .and('be.visible');

});

it('User searches a game', () => {
  // Visit the product page
  cy.visit('https://www.unibet.com/');

  cy.login('sheylapsouza@gmail.com', 'Sh&yl@25');   // Calling the login command in your tests

  cy.get('a[title="Casino"]')//find the link Casino and opening the screen
      .should('exist')
      .click({ force: true });

  cy.get('[data-test-name="search-input-field"]',{ timeout: 10000 })//selecting the search field and searching some games
      .should('exist') 
      .and('be.visible')
      .type('oasis of dead{enter}');

  cy.get('[data-test-name="game-name"]') //checking if the app displaed the rigth games
      .each(($el) => {
      if ($el.text().includes('oasis of dead')) {
      cy.wrap($el).should('be.visible'); 
      }
  });
});

});


describe('Starts a game on mobile', () => {
  
  const viewports = [
    { device: 'Mobile', width: 375, height: 667 },
  ];

  viewports.forEach(({ device, width, height }) => {
    context(`Testing on ${device}`, () => {
      beforeEach(() => {
        cy.viewport(width, height); // Set the viewport before each test
      });
    });
  }); 

  it('Scenario: User opens the Sports home page', () => {
      cy.viewport(375, 667)
        // Visit the product page
      cy.visit('https://www.unibet.com/');
      
      cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }) // close the cookie mensage
        .should('be.visible')
        .click();


      cy.login('sheylapsouza@gmail.com', 'Sh&yl@25'); // Calling the login command in your tests

      cy.get('a[title="Sports"]') //find the link Sports and opening the screen
      .should('exist')
      .click({ force: true });

      cy.get('[data-test-name="top-picks-header"]') //checking if the rigth screen was opened and the titles are visible
      .contains('Top picks') 
      .and('be.visible');

});

it('User searches a game', () => {
  cy.viewport(375, 667)
  // Visit the product page
  cy.visit('https://www.unibet.com/');

  cy.get('#onetrust-accept-btn-handler', { timeout: 10000 })  // close the cookie mensage
  .should('be.visible')
  .click();

  cy.login('sheylapsouza@gmail.com', 'Sh&yl@25'); // Calling the login command in your tests

  cy.get('a[title="Casino"]') //find the link Casino and opening the screen
      .should('exist')
      .click({ force: true });

  cy.get('[data-test-name="search-box"] input',{ timeout: 10000 })//selecting the search field and searching some games
      .should('exist') 
      //.and('be.visible')
      .type('oasis of dead{enter}', { force: true });

  cy.get('[data-test-name="game-name"]',{ timeout: 10000 }) //selecting the search field and searching some games
      .each(($el) => {
         if ($el.text().includes('oasis of dead')) {
        cy.wrap($el).should('be.visible');
      }
  });

});

});
