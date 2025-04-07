/// <reference types="cypress" />

describe('Navbar test', () => {
	beforeEach(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('Should display online banking content', () => {
		// cy.pause();
		cy.get('#onlineBankingMenu').click()
		cy.url().should('include', 'online-banking.html')
		cy.get('h1').should('contain.text', 'Online Banking')
	})

	it('Should display feedback content', () => {
		// cy.pause();
		cy.get('#feedback').click()
		cy.url().should('include', 'feedback.html')
	})

	it('Should display homepage content ', () => {
		// cy.pause();
		cy.contains('Zero Bank').click()
		cy.url().should('include', 'index.html')
	})
})
