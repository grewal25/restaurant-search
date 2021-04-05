

describe('Accessibility Testing', () => {

    beforeEach(() => {
      cy.visit("")
      
    })
  
    it('Has no detactable a11y violations on load', () => {
      // Injecting axe-core Library
      cy.injectAxe()
      cy.get('input').should('be.visible');
      cy.wait(1000).get('input').type("toronto")
      // first a11y on search Field
      cy.checkA11y('input')
 
    })
  
 
  
  })