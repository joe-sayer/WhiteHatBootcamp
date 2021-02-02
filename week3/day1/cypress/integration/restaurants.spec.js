describe('main restaurant page tests', () => {
    it('find main restaurant page @ localhost:3000', () => {
        cy.visit('http://localhost:3000')
    })

    it('accesses the add restaurant page and adds new restaurant', () => {
        cy.visit('http://localhost:3000')
        // searches for DOM element that includes content and then calls 'click'
        cy.contains('Add').click() // access add page
        cy.get('input[name=name]').type('test') // adds input
        cy.get('input[name=image]').type('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')
        cy.get('form').submit() // submits form with test data
        cy.visit('http://localhost:3000') // visits original page
        cy.contains('test') // checks for new restaurant
    })

    it('delete restaurant', () => {
        cy.visit('http://localhost:3000')
        cy.contains('test').click()
        cy.contains('Delete').click()
        cy.visit('http://localhost:3000')
        cy.get('test').should('not.exist')
    })
})