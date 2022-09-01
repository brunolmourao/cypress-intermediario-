/// <reference types="Cypress" />

import {faker} from '@faker-js/faker' 

describe('Create Issue',() => {
  const issue = {
    tittle : `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }
  beforeEach(() => {
    cy.login()
    cy.api_createProject(issue.project)
  })
  
  it('sucessfully', () => {
    cy.gui_createIssue(issue)

    cy.get('.issue-details')
    .should('contain',issue.tittle)
    .and('contain',issue.description)
  })
})