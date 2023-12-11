describe('My tsetcase', () => {
  it('test1 verify Title Positive testcase', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')
  })


  it('test2 verify Title Negative Ttestcase', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM1234')
  })
})