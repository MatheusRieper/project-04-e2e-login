describe('Page Login', function () {

  beforeEach(function () {
    cy.openSite()
    cy.url().should('include', '/login')
  })

  // ------------ SuccessFull Login ------------
  describe('Successfull Login', function () {

    it('should login with registered', function () {

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

  describe('Invalid Login', function () {

    beforeEach(function () {
      cy.fixture('login').as('login')
    })

    it('should not login with unregistered', function () {

      this.login.invalid.forEach((data) => {

        cy.login(data.email, data.password)

        cy.contains(data.message)
          .should('be.visible')

        cy.reload()
      })
    })
  })

})