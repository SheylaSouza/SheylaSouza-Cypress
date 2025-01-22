describe('Starts a game on desktop', () => {

  it('Scenario: User opens the Sports home page', () => {
        // Visit the product page
        cy.visit('https://www.unibet.com/');

      cy.get('.header-container .account-container') // get the containers heard and account
      .find('.css-h33w7b') // Find the login button inside the container
      .click(); // Click the button and open the login screen
      
      cy.get('[data-test-name="kaf-username-email-field"]')
      .should('exist') // Ensure the element exists
      .and('be.visible') // Ensure the element is visible
      .type('sheylapsouza@gmail.com') // Type the expected value
      .should('have.value', 'sheylapsouza@gmail.com'); // Assert the value

      cy.get('[data-test-name="kaf-password-field"]')
      .should('exist') // Ensure the element exists
      .and('be.visible') // Ensure the element is visible
      .type('Sh&yl@25') // Type the expected value
      .should('have.value', 'Sh&yl@25'); // Assert the value

      cy.get('[data-test-name="kaf-submit-credentials-button"]')
      .click(); // Assert the value

      cy.get('a[title="Sports"]')
      .should('exist') // Find the login button inside the container // Click the button and open the login screen
      .click({ force: true });

      cy.get('[data-test-name="top-picks-header"]')
      .contains('Top picks') //Ensure the element exists
      .and('be.visible') // Ensure the element is visible

});

it('User searches a game', () => {
  // Visit the product page
  cy.visit('https://www.unibet.com/');

cy.get('.header-container .account-container') // get the containers heard and account
.find('.css-h33w7b') // Find the login button inside the container
.click(); // Click the button and open the login screen

cy.get('[data-test-name="kaf-username-email-field"]')
.should('exist') // Ensure the element exists
.and('be.visible') // Ensure the element is visible
.type('sheylapsouza@gmail.com') // Type the expected value
.should('have.value', 'sheylapsouza@gmail.com'); // Assert the value

cy.get('[data-test-name="kaf-password-field"]')
.should('exist') // Ensure the element exists
.and('be.visible') // Ensure the element is visible
.type('Sh&yl@25') // Type the expected value
.should('have.value', 'Sh&yl@25'); // Assert the value

cy.get('[data-test-name="kaf-submit-credentials-button"]')
.click(); // Assert the value

cy.get('a[title="Casino"]')
      .should('exist') // Find the login button inside the container // Click the button and open the login screen
      .click({ force: true });

      cy.get('[data-test-name="search-input-field"]',{ timeout: 10000 })
      .should('exist') // Ensure the element exists
      .and('be.visible') // Ensure the element is visible
      .type('oasis of dead{enter}'); // Type the expected value

      cy.get('[data-test-name="game-name"]')
  .each(($el) => {
    if ($el.text().includes('oasis of dead')) {
      cy.wrap($el).should('be.visible'); // Optionally check visibility for the matching element
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
      
        cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }) // Wait up to 10 seconds
        .should('be.visible')
        .click();


      cy.get('.header-container .account-container') // get the containers heard and account
      .find('.css-h33w7b') // Find the login button inside the container
      .click(); // Click the button and open the login screen
      
      cy.get('[data-test-name="kaf-username-email-field"]')
      .should('exist') // Ensure the element exists
      .and('be.visible') // Ensure the element is visible
      .type('sheylapsouza@gmail.com') // Type the expected value
      .should('have.value', 'sheylapsouza@gmail.com'); // Assert the value

      cy.get('[data-test-name="kaf-password-field"]')
      .should('exist') // Ensure the element exists
      .and('be.visible') // Ensure the element is visible
      .type('Sh&yl@25{enter}') // Type the expected value
      .should('have.value', 'Sh&yl@25'); // Assert the value

      cy.get('a[title="Sports"]')
      .should('exist') // Find the login button inside the container // Click the button and open the login screen
      .click({ force: true });

      cy.get('[data-test-name="top-picks-header"]')
      .contains('Top picks') //Ensure the element exists
      .and('be.visible') // Ensure the element is visible

});

it('User searches a game', () => {
  cy.viewport(375, 667)
  // Visit the product page
  cy.visit('https://www.unibet.com/');

  cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }) // Wait up to 10 seconds
  .should('be.visible')
  .click();

cy.get('.header-container .account-container',{ timeout: 10000 }) // get the containers heard and account
.find('.css-h33w7b') // Find the login button inside the container
.click(); // Click the button and open the login screen

cy.get('[data-test-name="kaf-username-email-field"]')
.should('exist') // Ensure the element exists
.and('be.visible') // Ensure the element is visible
.type('sheylapsouza@gmail.com') // Type the expected value
.should('have.value', 'sheylapsouza@gmail.com'); // Assert the value

cy.get('[data-test-name="kaf-password-field"]')
.should('exist') // Ensure the element exists
.and('be.visible') // Ensure the element is visible
.type('Sh&yl@25{enter}') // Type the expected value
.should('have.value', 'Sh&yl@25'); // Assert the value

cy.get('a[title="Casino"]')
      .should('exist') // Find the login button inside the container // Click the button and open the login screen
      .click({ force: true });

      cy.get('[data-test-name="game-name"]',{ timeout: 10000 })
  .each(($el) => {
    if ($el.text().includes('oasis of dead')) {
      cy.wrap($el).should('be.visible'); // Optionally check visibility for the matching element
    }
  });

});

});
