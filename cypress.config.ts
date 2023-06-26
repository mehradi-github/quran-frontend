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
    }
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
})