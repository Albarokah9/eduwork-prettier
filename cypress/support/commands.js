// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
	// cy.clearCookies()
	// cy.clearLocalStorage()

	cy.get('#user_login').type(username)
	cy.get('#user_password').type(password)
	cy.contains('Sign in').click()
})

Cypress.Commands.add('login2', (username, password) => {
	// cy.clearCookies()
	// cy.clearLocalStorage()

	cy.get('#user-name').type(username)
	cy.get('#password').type(password)
	cy.get('#login-button').click()
})

Cypress.Commands.add('loginWithFixture', userType => {
	cy.fixture('dua').then(data => {
		const username = data[userType].username
		const password = data[userType].password

		// Isi form login dan klik tombol login
		cy.get('#user_login').type(username)
		cy.get('#user_password').type(password)
		cy.contains('Sign in').click()
	})
})

Cypress.Commands.add('logout', () => {
	cy.get('.bm-burger-button').click()
	cy.get('#logout_sidebar_link').click()
	cy.url().should('include', 'https://www.saucedemo.com/')
	cy.get('.title').should('not.exist')
})

Cypress.Commands.add('loginWithFixture2', userType => {
	cy.fixture('saucedemo').then(data => {
		const username = data[userType].username
		const password = data[userType].password

		// Isi form login dan klik tombol login
		cy.get('#user-name').type(username)
		cy.get('#password').type(password)
		cy.get('#login-button').click()
	})

	Cypress.Commands.add('addProductsToCart', productKeys => {
		cy.fixture('products').then(products => {
			productKeys.forEach(productKey => {
				const product = products[productKey]
				// Klik tombol "Add to cart"
				cy.get(product.buttonSelector).click()
			})
			// Pastikan jumlah item di keranjang sesuai dengan jumlah produk yang ditambahkan
			cy.get('.shopping_cart_link').should(
				'contain',
				productKeys.length.toString()
			)
		})
	})
})
