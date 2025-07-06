const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoUploadOnPasses: false,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    charts: true,
    reportPageTitle: 'Cypress Test Report'
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
