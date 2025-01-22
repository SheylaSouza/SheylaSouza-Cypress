require('cypress-xpath');
import 'cypress-iframe';

Cypress.Commands.add('login', (username, password) => {
    // Open the login screen
    cy.get('.header-container .account-container') // Locate the header and account container
      .find('.css-h33w7b') // Find the login button
      .click(); // Click the login button
  
    // Input the username/email
    cy.get('[data-test-name="kaf-username-email-field"]')
      .should('exist') // Ensure the username field exists
      .and('be.visible') // Ensure it's visible
      .type(username) // Enter the username
      .should('have.value', username); // Assert that the value matches
  
    // Input the password
    cy.get('[data-test-name="kaf-password-field"]')
      .should('exist') // Ensure the password field exists
      .and('be.visible') // Ensure it's visible
      .type(password) // Enter the password
      .should('have.value', password); // Assert that the value matches
  
    // Submit the credentials
    cy.get('[data-test-name="kaf-submit-credentials-button"]')
      .should('exist') // Ensure the submit button exists
      .and('be.visible') // Ensure it's visible
      .click(); // Click the submit button
  });
  