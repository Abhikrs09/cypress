
describe('Alerts',()=>{
    
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      });

    it('Normal Alert',()=>{

       cy.get("button[onClick='jsAlert()']").click();
       cy.on('window:alert',(t)=>{
        expect(t).to.contains('I am a JS Alert');
       })
       cy.get('#result').should('have.text','You successfully clicked an alert')

    })


    it('Alert confirmation-ok button',()=>{

        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
           })

           cy.get('#result').should('have.text','You clicked: Ok')
    })  

    it('Alert confirmation-cancel button',()=>{

        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
           })
        cy.on('window:confirm',()=> false)
       cy.get('#result').should('have.text','You clicked: Cancel')
    }) 

    it.only('Alert Prompt',()=>{
        // cy.on('window:confirm', (str) => {
        //     expect(str).to.equal('I am a JS prompt');
        //     return false; 
        //   });

        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('welcome'); // Simulating input for prompt
          });

        cy.get("button[onClick='jsPrompt()']").click()
        
        cy.get('#result').should('have.text','You entered: welcome')
    })

})