// cypress/support/e2e.js

// Import custom commands, if any
import './commands';

// Run some code before every test
beforeEach(() => {
  cy.log('Running before each test');
});