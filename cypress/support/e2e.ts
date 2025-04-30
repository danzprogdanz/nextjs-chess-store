// cypress/support/e2e.ts
/// <reference types="cypress" />

// Global beforeEach hook
beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

export {};