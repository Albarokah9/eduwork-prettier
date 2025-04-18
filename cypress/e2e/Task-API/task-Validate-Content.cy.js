/// <reference types="cypress" />

describe('Validate Ability Data from Ditto', () => {
    it('should validate ability name and url', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.abilities[0].ability.name).to.eq('limber');
            
        });
    });
});
