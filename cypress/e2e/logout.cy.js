/// <reference types="Cypress" />

describe('logout',() => {
  beforeEach(() => cy.login())
  it('sucessfully',() => {
    cy.logout()

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}users/sign_in`)
  })
})