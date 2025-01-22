describe('User Login and Password Management', () => {
    
    it('User logs in with valid credentials', () => {
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

      cy.get('a.deposit-button[title="Deposit"]')
     .should('be.visible');

});


it(' User forgets their password', () => {
    // Visit the product page
    cy.visit('https://www.unibet.com/');

  cy.get('.header-container .account-container') // get the containers heard and account
  .find('.css-h33w7b') // Find the login button inside the container
  .click(); // Click the button and open the login screen
  
  cy.get('[data-test-name="kaf-forgot-password-link"]')
  .should('exist') // Ensure the element exists
  .and('be.visible') // Ensure the element is visible
  .click();

  cy.get('[data-test-name="kaf-forgot-password-field"]')
  .should('exist') // Ensure the element exists
  .and('be.visible') // Ensure the element is visible
  .type('sheylapsouza@gmail.com') // Type the expected value
  .should('have.value', 'sheylapsouza@gmail.com'); // Assert the value

  cy.get('[data-test-name="kaf-forgot-password-submit"]')
  .click(); // Assert the value

  cy.get('div[data-dn="Heading"].css-s2d24p.e1d8jnas0') // Select the element by attributes and class
  .should('be.visible') // Assert that the element is visible
  .and('contain.text', 'Check your email inbox'); // Optionally, verify the text inside the element

});

});

describe('User Login and Password Management mobile', () => {
  
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

  it('User logs in with valid credentials', () => {
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

  cy.get('a.deposit-button[title="Deposit"]')
 .should('be.visible');

});

it(' User forgets their password', () => {
// Visit the product page
cy.visit('https://www.unibet.com/');

cy.get('.header-container .account-container') // get the containers heard and account
.find('.css-h33w7b') // Find the login button inside the container
.click(); // Click the button and open the login screen

cy.get('[data-test-name="kaf-forgot-password-link"]')
.should('exist') // Ensure the element exists
.and('be.visible') // Ensure the element is visible
.click();

cy.get('[data-test-name="kaf-forgot-password-field"]')
.should('exist') // Ensure the element exists
.and('be.visible') // Ensure the element is visible
.type('sheylapsouza@gmail.com') // Type the expected value
.should('have.value', 'sheylapsouza@gmail.com'); // Assert the value

cy.get('[data-test-name="kaf-forgot-password-submit"]')
.click(); // Assert the value

cy.get('div[data-dn="Heading"].css-s2d24p.e1d8jnas0') // Select the element by attributes and class
.should('be.visible') // Assert that the element is visible
.and('contain.text', 'Check your email inbox'); // Optionally, verify the text inside the element

});
      
});