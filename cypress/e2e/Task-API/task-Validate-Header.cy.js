/// <reference types="cypress" />

describe('Valiadate Header', () => {
    beforeEach('Successfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')

    });

    it('Assertion untuk response body ', () => {

        cy.get('@pokemon').then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('name', 'ditto')
            expect(response.body).to.have.property('id', 132)
            expect(response.body).to.have.property('abilities')
            expect(response.body.abilities).to.be.an('array')



        })
    })
})