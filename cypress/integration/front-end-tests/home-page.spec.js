
describe('Test cases for Searching Restaurant Page', () => {

    beforeEach(() => {
      cy.visit("")
    })
  
    it('The Home page should have intended Page Title and Description', () => {
      cy.get('.main-text').contains("Search Restaurant")
    })
  
    it('The Search option should result in restaurants for cities searched', () => {
      cy.get('input').type("toronto")
      // Check that only 3 results are retured for Toronto
      cy.get('.rest-list > :nth-child(1)').contains('3')
      // Checks that expected results returned contains the expected restaurant
      cy.get(':nth-child(2) > .para-top > .para1').contains('Pai Northern Thai Kitchen')
    
    })

    it('The Cuisine Search option should result in restaurants for cities searched', () => {
      cy.get('input').type("toronto")

      cy.get('.para-kinds').contains("What kind of cuisine would you like?")

      //Checks that cuisine search option is available
      cy.get('.input-search-field > input').type("thai")

      //Checks that expected restaurant is returned on tyyping in Thai Cuisine
      cy.get('.cuisine-name').contains('Pai Northern Thai Kitchen')
    
    })
  
  })