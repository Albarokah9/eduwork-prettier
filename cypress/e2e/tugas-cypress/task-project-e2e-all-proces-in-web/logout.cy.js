/// <reference types="cypress" />

describe('Logout', () => {
	beforeEach(() => {
		// Kunjungi halaman login
		// Sebaiknya login terlebih dahulu sebelum melakukan logout
		cy.visit('https://www.saucedemo.com/')
		// // Login menggunakan kredensial valid dengan menggunakan fi
		// cy.fixture('saucedemo').then(data => {
		// 	const username = data.validUser.username
		// 	const password = data.validUser.password

		// 	cy.get('#user-name').type(username)
		// 	cy.get('#password').type(password)
		// 	cy.contains('Login').click()

		// Login menggunakan custom command dengan menggunakan fixture
		cy.loginWithFixture2('validUser')
		// Assertion: Memastikan berhasil login
		cy.url().should('include', '/inventory.html')
		cy.get('.title').should('contain', 'Products')
		cy.get('.shopping_cart_link').should('be.visible')
		// })
	})

	it('Logout dari akun menggunakan costume commands', () => {
		// // Klik pada menu burger (ikon tiga garis horizontal)
		// cy.get('.bm-burger-button').click()

		// // Klik pada opsi "Logout"
		// cy.get('#logout_sidebar_link').click()

		// // Assertion: Memastikan berhasil logout
		// cy.url().should('include', 'https://www.saucedemo.com/')

		// Menggunakan custom command untuk logout
		// Klik pada menu burger (ikon tiga garis horizontal)
		// cy.get('.bm-burger-button').click()
		// // Klik pada opsi "Logout"
		// cy.get('#logout_sidebar_link').click()
		cy.logout()

		// Assertion: Memastikan berhasil logout
		cy.url().should('include', 'https://www.saucedemo.com/')
		cy.get('.title').should('not.exist')
	})
})
