describe('API Example', () => {
    cypress.request('https://pokeapi.com/api/vs2/pokemon/25').as('pokemon')
    cy.get('@pokemon')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json; charset=utf-8')

});