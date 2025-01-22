const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const isMobile = config.env.isMobile || false;
      if (isMobile) {
        config.viewportWidth = 375;
        config.viewportHeight = 667;
      }
      return config;
    },
    baseUrl: 'https://www.unibet.com/', // Replace with your app's URL
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});