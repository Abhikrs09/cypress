
require('@4tw/cypress-drag-drop')

describe('Mouse Hover',()=>{


    it('Mouse Hover',() =>{

        cy.visit("https://demo.opencart.com/")
        cy.xpath("(//a[@class='nav-link'])[1]").should('not.be.visible')
        cy.contains("Desktops").trigger('mouseover').click()
        cy.xpath("(//a[@class='nav-link'])[1]").should('be.visible')

    })

    it('Mouse Right Click',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        
        //Approach 1

        cy.get('.context-menu-icon-copy').should('not.be.visible')
        cy.get('span.context-menu-one.btn').trigger('contextmenu')
        cy.get('.context-menu-icon-copy').should('be.visible')


        // Approach 2

        // cy.get('span.context-menu-one.btn').rightclick()
        // cy.get('.context-menu-icon-copy').should('be.visible')

    })

    it('Duble Click',()=>{

        cy.visit("https://demo.guru99.com/test/simple_context_menu.html")

        // Approach 1
        cy.get("button[ondblclick='myFunction()']").trigger('dblclick')

        // Approach 2
        cy.get("button[ondblclick='myFunction()']").dblclick()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('You double clicked me.. Thank You..');
           })

    })

    it.only('Drag and Drop ',()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')

        cy.wait(3000)
        
        cy.get('#box6').drag('#box106',{force:true})

    })

})