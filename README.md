## Prerequisites

Make sure you have the following tools installed on your system before proceeding:
- **Node.js** (Recommended version: 14 or above)
- **npm** (Node package manager)

## Table of Contents

- [Installation](#installation)
- [Test Description](#test-description)
- [Test Structure](#test-structure)
- [Running the Test](#running-the-test)
- [Enhancements](#enhancements)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Installation

### 1. Install Dependencies

Run the following npm commands to install the necessary dependencies for your test environment:

```bash
# Install Cypress and necessary plugins
npm install
npm install -D cypress
npm install -D cypress-xpath
npm install --save-dev typescript
npm install --save-dev @cypress/webpack-preprocessor
```

These dependencies will provide the following:

- **`cypress-xpath`**: Support for XPath selectors in Cypress tests.
- **`typescript`**: TypeScript support for better type checking and autocompletion.
- **`@cypress/webpack-preprocessor`**: Webpack preprocessor for Cypress tests.
```
```
This will launch the Cypress Test Runner and allow you to run your tests.


## Test Structure

Your project folder will be structured like this:

```
/cypress
  /e2e
    /Bet
      login.cy.js        # Test suite for login functionality
      game.cy.js         # Test suite for game functionality
  /support
    commands.js          # Custom Cypress commands
    e2e.ts               # General test configuration
cypress.config.js         # Cypress configuration file
package.json              # Project metadata and dependencies
tsconfig.json             # TypeScript configuration
```

## Running the Test

### 1. Open Cypress Test Runner

To open Cypress Test Runner, use the following command:

```bash
npm cypress open
```

## Enhancements

1. **Use TypeScript for Step Definitions**:  
   You can write your step definitions in TypeScript for better type-checking and autocompletion. Make sure to configure the `tsconfig.json` file appropriately.

2. **Custom Commands**:  
   You can extend Cypress with custom commands by adding them to `commands.js` for better reuse and organization.

## Troubleshooting

1. **Cypress not opening**:  
   If Cypress fails to open, make sure you have installed it correctly by running `npm install` again and checking if Cypress appears in your `node_modules`.

2. **Dependency conflicts**:  
   Ensure all dependencies are correctly installed and up-to-date. If there are version mismatches, try deleting `node_modules` and `package-lock.json`, then running `npm install` again.

3. **XPath not working**:  
   Ensure you installed `cypress-xpath` and added `require('cypress-xpath')` in your `commands.js` or `support/index.js` file.

```javascript
require('cypress-xpath');
import 'cypress-iframe';
```

## Considerations

1. **Deposit funcionatilty**:  If I had more time, I would focus on automating this functionality. I attempted to do so, but I encountered an issue where the popup did not open. Although my test logic was correct, the popup failed to appear, and I couldn't determine the exact reason.

  Here’s the code I worked on:
  describe('Deposit an amount into the account', () => {
    
    it('User deposits an amount into their account', () => {
        // Visit the product page
        cy.visit('https://www.unibet.com/');

      cy.login('sheylapsouza@gmail.com', 'Sh&yl@25');

      cy.get('.header-container .account-container .header-list') 
      .find('[class*="deposit-link"]', { timeout: 10000 } )
      .should('exist') 
      .and('be.visible')
      .click({ force: true });
});
});

1. **Games funcionatilty**:  
  If I had more time, I would dedicate effort to automating the games section. During my research, I discovered several tools that could facilitate this, but I need additional time to learn and implement them effectively.

Here’s the code I have so far:

it('Scenario: User opens the game', () => {
        // Visit the product page
        cy.visit('https://www.unibet.com/');

      // Calling the login command in your tests
      cy.login('sheylapsouza@gmail.com', 'Sh&yl@25');


      cy.get('a[title="Casino"]')
      .should('exist') 
      .click({ force: true });

      cy.get('.esyw3cc0.css-o3yy56 a[href="/play/book-of-cleopatra"]')
      .should('exist')  
      .and('be.visible') 
      .click(); 


      cy.get('[data-test-name="search-input-field"]')
      .should('exist')
      .and('be.visible') 
      .type('oasis of dead{enter}');

      cy.get('[data-test-name="game-tile-wrapper"]')
      .should('exist') 
      .and('be.visible')
      .find('[data-test-name="game-tile-play-for-real-button"]')
      .click(); 

});