import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
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
})