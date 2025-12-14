describe('Page Login', () => {

  it('Successful', () => {

    // Initializing Page
    cy.start()
    // Page Login
    cy.login('Admin', 'admin123')
    .should('be.visible')

    cy.get('h6')
    .should('contain.text', 'Dashboard')

    // Checking Home Page
    cy.url().should('include', '/index')
  })


  it('Invalid Username', () => {

    // Initializing Page
    cy.start()
    // Page Login
    cy.login('matheus', 'admin123')


    cy.get('.oxd-alert-content-text')
    .should('contain.text', 'Invalid credentials')

    // Checking PAge Login
    cy.url().should('include', '/login')
  })

  it('Invalid Password', () => {

    // Initializing Page
    cy.start()
    // Checking Login Page
    cy.url().should('include', '/login')


    // login page
    cy.login('Admin','123')

    // Checking  Error Message
    cy.get('.oxd-alert-content-text')
    .should('contain.text', 'Invalid credentials') 

    // Checking Login Page
    cy.url().should('include', '/login')

  })
})