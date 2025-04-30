import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    // Set the spec pattern (where your test files are located)
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    // Support file location
    supportFile: 'cypress/support/e2e.ts',
    // Whether to record videos of test runs
    video: false,
    // Viewport settings
    viewportWidth: 1280,
    viewportHeight: 720,
    // Setup Node events
    setupNodeEvents(on, config) {
      // You can add plugins or modify config here
      return config
    },
    // Environment variables
    env: {
      // Add any environment variables here
      // Example:
      // apiUrl: 'http://localhost:3000/api'
    }
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    // Component testing specific configurations
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.ts',
    indexHtmlFile: 'cypress/support/component-index.html'
  }
})