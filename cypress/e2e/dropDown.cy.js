
describe('Drop Down',() =>{

    it('Testcase 1',() => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#country').select('Canada').should('have.value', 'canada')

        cy.get('#colors').select('Blue');

        // Assertion to check if 'blue' is included in the selected values
        cy.get('#colors').then(($selectedOption) => {
          const selectedValues = $selectedOption.val();
          expect(selectedValues).to.include('blue');
        });
        

    })
})