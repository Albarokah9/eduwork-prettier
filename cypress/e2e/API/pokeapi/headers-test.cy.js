/// <reference types="cypress" />

describe('Valiadate Header', () => {
    beforeEach('Successfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')

    });

    // Assertion untuk status code
    it('Successfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('status').should('equal', 200)
        
    });

   // Assertion untuk response body
    it('Assertion untuk response body ', () => {
        cy.get('@pokemon').then((response) => {
            expect(response.body).to.have.property('name', 'ditto')
            expect(response.body).to.have.property('id', 132)
            expect(response.body).to.have.property('abilities')
            expect(response.body.abilities).to.be.an('array')
        }) 
    });

    
    it('Successfully valdiate status code with params', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2&per_pages=1&delay=3',

        }).as('users')
        cy.get('@users').its('status').should('equal', 200)

    });

    it('Successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name: "bulbasaur"})
        
    });

    it('Successfully validate negative response', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
            failOnStatusCode: false 
        }).as('eduwork')
        cy.get('@eduwork').its('status').should('equal', 404) 
        
    });

     
});