describe('Navigation', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')      
      cy.get('h1').should('contain','Welcome Next.js')
    })
  })