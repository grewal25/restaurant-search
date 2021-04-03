

describe('Test cases for Searching Restaurant Page', () => {

    beforeEach(() => {
      cy.visit("localhost:3000")
    })
  
    it('The Home page should have intended Page Title and Description', () => {
      cy.get('.main-text').contains("Search Restaurant")
      cy.get('.search-text').contains("Please type name of the city")
    })
  
    it('The Search option should result in restaurants for cities searched', () => {
      cy.get('input').type("toronto")
    
    })
  
  })