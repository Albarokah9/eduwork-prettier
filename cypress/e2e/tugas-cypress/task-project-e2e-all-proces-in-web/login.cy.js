/// <reference types="cypress" />

describe('Test login menggunakan kredensial invalid dan valid', () => {
	beforeEach(() => {
		cy.visit('https://www.saucedemo.com/')
	})

	it('Login dengan kredensial invalid menggunakan costume commands dan fixtures', () => {
		// cy.fixture('saucedemo').then(data => {
		// 	const username = data.invalidUser.username
		// 	const password = data.invalidUser.password

		// 	cy.get('#user-name').type(username);
		// 	cy.get('#password').type(password);
		//  cy.get('#login-button').click();

		// Assertion: Memastikan muncul pesan kesalahan
		// cy.get('.error-message-container')
		// 	.should('be.visible')
		// 	.and('contain', 'Epic sadface: Sorry, this user has been locked out.')
		// 		// 	cy.pause();
		// });

		// Menggunakan custom command untuk login dengan kredensial tidak valid
		// Menggunakan fixture untuk mendapatkan data kredensial tidak valid
		// Mengambil data dari fixture file saucedemo.json
		// cy.fixture('saucedemo').then(data => {
		//     const username = data.invalidUser.username
		//     const password = data.invalidUser.password
		//     cy.login2(username, password)
		// });
		cy.loginWithFixture2('invalidUser')
		// Assertion: Memastikan muncul pesan kesalahan
		cy.get('h3').should(
			'contain',
			'Epic sadface: Sorry, this user has been locked out.'
		)
		cy.pause()

		// });
	})

	it('Login dengan kredensial valid menggunakan fixtures', () => {
		cy.fixture('saucedemo').then(data => {
			const username = data.validUser.username
			const password = data.validUser.password

			cy.get('#user-name').type(username)
			cy.get('#password').type(password)
			cy.get('#login-button').click()

			// Assertion: Memastikan berhasil login
			cy.url().should('include', '/inventory.html')
			cy.get('.title').should('contain', 'Products')
		})
	})
})
