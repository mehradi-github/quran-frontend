import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
        FOO: 'bar',
  },
  e2e: {
    baseUrl:"http://localhost:3000",
    supportFile:false,
    retries:{
        runMode:1,
        openMode:1
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Reports',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
})