

describe('Test cases for Searching Restaurant Page', () => {

    beforeEach(() => {
      cy.visit("localhost:3000")
      
    })
  
    it('Has no detactable a11y violations on load', () => {
      cy.injectAxe()
      cy.checkA11y()
    })
  
 
  
  })