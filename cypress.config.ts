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
})