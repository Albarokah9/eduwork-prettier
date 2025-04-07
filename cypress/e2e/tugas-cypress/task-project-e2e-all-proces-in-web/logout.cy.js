/// <reference types="cypress" />

describe('Logout', () => {
	beforeEach(() => {
		// Kunjungi halaman login
		// Sebaiknya login terlebih dahulu sebelum melakukan logout
		cy.visit('https://www.saucedemo.com/')
		// Login menggunakan kredensial valid dengan menggunakan fi
		cy.fixture('saucedemo').then(data => {
			const username = data.validUser.username
			const password = data.validUser.password

			cy.get('#user-name').type(username)
			cy.get('#password').type(password)
			cy.contains('Login').click()
		})
	})

	it('Logout dari akun menggunakan costume commands', () => {
		// // Klik pada menu burger (ikon tiga garis horizontal)
		// cy.get('.bm-burger-button').click()

		// // Klik pada opsi "Logout"
		// cy.get('#logout_sidebar_link').click()

		// // Assertion: Memastikan berhasil logout
		// cy.url().should('include', 'https://www.saucedemo.com/')

		cy.logout()
	})
})
