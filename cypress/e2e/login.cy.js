describe('Page Login', () => {

  beforeEach(() => {
    cy.openSite()
    cy.url().should('include', '/login')
  })

  // ------------ SuccessFull Login ------------
  describe('Successfull Login', () => {

    it('should login with registered', () => {

      cy.login(
        Cypress.env('ADMIN_USER'),
        Cypress.env('ADMIN_PASS')
      )
        .should('be.visible')

      cy.get('h6')
        .should('contain.text', 'Dashboard')

      cy.url().should('include', '/index')
    })
  })

  // ------------ Invalid Login ------------
  describe('Invalid Login', () => {

    it('should not login invalid  email', () => {

      cy.login('Test',
        Cypress.env('ADMIN_PASS')
      )

      cy.get('.oxd-alert-content-text')
        .should('be.visible')
        .and('contain.text', 'Invalid credentials')

      cy.url().should('include', '/login')
    })

    it('should not login invalid password', () => {

      cy.login(
        Cypress.env('ADMIN_USER'),
        '123')

      cy.get('.oxd-alert-content-text')
        .should('be.visible')
        .and('contain.text', 'Invalid credentials')

      cy.url().should('include', '/login')
    })
  })

})