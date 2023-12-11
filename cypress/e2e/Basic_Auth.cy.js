describe('Basic Auth',()=>{

   

    it("Basic Auth Type1",()=>{

        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{
            username: "admin",
            password: "admin"
        }})

        cy.get("div[class='example'] p").should('contain',"Congratulations! You must have the proper credentials.")

    })

    it("Basic Auth Type2",()=>{

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

        cy.get("div[class='example'] p").should('contain',"Congratulations! You must have the proper credentials.")

    })


})