const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://demo.seleniumeasy.com",
      viewportHeight: 900,
      viewportWidth: 1500,
      watchForFileChanges: false,
      defaultCommandTimeout:15000,
      responseTimeout:30000,
      requestTimeout:30000
  },
});
