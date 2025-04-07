/// <reference types="cypress" />

describe('Test login menggunakan kredensial invalid dan valid', () => {
	beforeEach(() => {
		cy.visit('https://www.saucedemo.com/')
	})

	it('Login dengan kredensial invalid menggunakan fixtures', () => {
		cy.fixture('saucedemo').then(data => {
			const username = data.invalidUser.username
			const password = data.invalidUser.password

			cy.get('#user-name').type(username)
			cy.get('#password').type(password)
			cy.contains('Login').click()

			// Assertion: Memastikan muncul pesan kesalahan
			cy.get('.error-message-container')
				.should('be.visible')
				.and('contain', 'Epic sadface: Sorry, this user has been locked out.')
		})
	})

	it('Login dengan kredensial valid menggunakan fixtures', () => {
		cy.fixture('saucedemo').then(data => {
			const username = data.validUser.username
			const password = data.validUser.password

			cy.get('#user-name').type(username)
			cy.get('#password').type(password)
			cy.contains('Login').click()

			// Assertion: Memastikan berhasil login
			cy.url().should('include', '/inventory.html')
			cy.get('.title').should('contain', 'Products')
		})
	})
})
