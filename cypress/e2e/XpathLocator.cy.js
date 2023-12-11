//import 'cypress-xpath';

describe('Xpath Locator',() =>{

    it('test1- FInd Number of Product', () =>{

        cy.visit('https://automationexercise.com/');
  
      cy.xpath("//a[.=' Products']").click()
      // Wait for the page to fully load
      cy.wait(2000); // Adjust the wait time according to your page load time
  
      cy.get('.product-image-wrapper').should('have.length',34)


    })
})