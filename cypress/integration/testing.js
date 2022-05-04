describe('Form App', () => {
    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]');
    const pineapple = () => cy.get('input[name=pineapple]');
    const bacon = () => cy.get('input[name=bacon]')
    const anchovies = () => cy.get('input[name=anchovies]')
    const sardines = () => cy.get('input[name=sardines]')
    const submitButton = () => cy.get('button[id=order-button]')
    const emailInput = () => cy.get('input[name=email]')
    const addressInput = () => cy.get('input[name=address]')

    it('Test Check', () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })
    
    it("Order Now", () => {
        cy.contains("Order Now!").click()
    })

    it("can type in the inputs", () => {
        cy.contains("Order Now!").click()
        nameInput()
            .should("have.value", "")
            .type("lorem ipsum")
            .should("have.value", "lorem ipsum")
        emailInput()
                .should('have.value', '')
                .type('John@gmail.com')
                .should('have.value', 'John@gmail.com')
    })

        it('Navigate', () => {
            cy.url().should('include', 'localhost');
        })
        it('Name, Checking all boxes', () => {
            cy.contains("Order Now!").click()
            nameInput()
                .should('have.value', '')
                .type('John')
                .should('have.value', 'John')
            emailInput()
                .should('have.value', '')
                .type('John@gmail.com')
                .should('have.value', 'John@gmail.com')
            pineapple()
                .should('not.be.checked')
                .check()
                .should('be.checked')
            bacon()
                .should('not.be.checked')
                .check()
                .should('be.checked')
            anchovies()
                .should('not.be.checked')
                .check()
                .should('be.checked')
            sardines()
                .should('not.be.checked')
                .check()
                .should('be.checked')    

        })



        it('Submit Button', () => {
            cy.contains("Order Now!").click()
            submitButton()
            cy.contains("submit")
                .should('be.disabled')
                nameInput().type('John')
                emailInput().type('jt@bloomtech.com')
                addressInput().type('1600 pennsylvania ave')
                cy.contains("Pineapple").click()
                cy.get("select[name=size]").select('Kids')
                
                submitButton().should('not.be.disabled')
        })

        
})