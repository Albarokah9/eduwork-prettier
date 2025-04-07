/// <reference types="cypress" />
// Cypress Test Case: Searchbox Test

describe('Searcbox Test', () => {
   beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com/index.html')
   });
   
   it('Should type into searchbox and submit', () => {
    cy.get('#searchTerm', { timeout: 10000 }).type('some text {enter}')
    cy.url().should('include', 'search.html')
   });

   it('Should show search result page', () => {
      cy.get('#searchTerm', { timeout: 10000 }).type('some text {enter}')
      cy.url().should('include', 'search.html')
      cy.get('h2').should('contain.text', 'Search Results:') 
   });
}); 

// Atribut	Format Cypress	Contoh
// id=	    #idName	        cy.get('#user-name')
// class=	  .className	    cy.get('.btn-primary')
// type=	  [type="value"]	cy.get('[type="text"]')

// Atribut lain	[atribut="value"]	cy.get('[data-test="login-button"]')
// Gabungan	tagname#idName.className[type="value"]	cy.get('input#user-name[type="text"]')
// Gabungan lain	tagname.className#idName[type="value"]	cy.get('input.btn-primary#user-name[type="text"]')