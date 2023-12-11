
import 'cypress-xpath';

describe('Locator', () => {
    it('should scroll to a specific position on the page', () => {
      cy.visit('https://automationexercise.com/');
  
      cy.xpath("//a[.=' Products']").click()
      // Wait for the page to fully load
      cy.wait(2000); // Adjust the wait time according to your page load time
  
      // Scroll to a specific position
      cy.window().then(win => {
        win.scrollTo(0, 100); // Scroll to x=0, y=100
      });


      cy.get('#search_product').type('tshirt')
      cy.get('#submit_search').click()
    });
  });
  