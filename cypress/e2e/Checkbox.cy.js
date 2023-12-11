describe('CheckBox    ',() =>{

    it('Test1- Number of checkbox',() => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get(".form-check-input[type='checkbox']").should('have.length',7)

    })

    it('Test1- Work with checkbox',() => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('.form-check-input#monday').should('be.visible')
        cy.get('.form-check-input#monday').check().should('be.checked')
        cy.get('.form-check-input#monday').uncheck().should('not.be.checked')


    })
})