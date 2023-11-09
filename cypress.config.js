const { defineConfig, default: cypress } = require("cypress");
//import { configurePlugin } from "cypress-mongodb";
const { configurePlugin } = require ("cypress-mongodb")


module.exports = defineConfig({
env: {
  mongodb: {
    uri: 'mongodb://127.0.0.1:27017',
    database: 'test'
  }
},
reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'HTML created reports',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    experimentalStudio: true,
    viewportHeight: 900,
    viewportWidth: 1400,
    defaultCommandTimeout: 4000,
    // baseUrl: 'https://www.cypress.io',
    retries: {
      openMode: 2,
      runMode: 2
    },
    // specPattern: 'cypress/e2e/myTests/*.cy.js',
    setupNodeEvents(on, config) {
      
      on('task', {log(message) {console.log(message); return null }})
      on('task', {saveUrl(url) {fs.writeFileSync('url.json', JSON.stringify(url)); return null }})
     // const newUrl = config.env.urlFromCli || 'https://www.guru99.com/'
     // config.baseUrl = newUrl

     require('cypress-mochawesome-reporter/plugin')(on);

     configurePlugin(on)

      return config
    },
  },
});
