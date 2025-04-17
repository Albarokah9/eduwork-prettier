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
Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
	cy.fixture('datapengiriman').then(data => {
		const { firstName, lastName, postalCode } = data
		// Klik ikon keranjang belanja
		cy.get('.shopping_cart_link').click()
		cy.url().should('include', '/cart.html')
		cy.get('.title').should('contain', 'Your Cart')

		// Klik tombol "CHECKOUT"
		cy.get('.btn_action.checkout_button').click()
		cy.url().should('include', '/checkout-step-one.html')
		cy.get('.title').should('contain', 'Checkout: Your Information')

		// Mengisi data pengiriman
		cy.get('#first-name').type(firstName)
		cy.get('#last-name').type(lastName)
		cy.get('#postal-code').type(postalCode)
		cy.get('.btn_primary.cart_button').click()

		// Memastikan berada di halaman ringkasan pesanan
		cy.url().should('include', '/checkout-step-two.html')
		cy.get('.title').should('contain', 'Checkout: Overview')

		// Klik tombol "FINISH"
		cy.get('.btn_action.cart_button').click()

		// Memastikan berada di halaman konfirmasi pesanan
		cy.url().should('include', '/checkout-complete.html')
		cy.get('h2').should('contain', 'Thank you for your order!')
		cy.get('.complete-text').should(
			'contain',
			'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
		)
	})
})

Cypress.Commands.add('loginViaAPI',(
	email = Cypress.env('userEmail'),
	password = Cypress.env('userPassword'),
) => {
	cy.request('POST', `${Cypress.env('apiUrl')}/api/login`, {
		username: email,
		password,
	}).then((response) => {
		console.log(response)
		console.table(response.body);
		cy.setCookie('token', response.body.token)
		cy.visit('/#!/main')
	})
})

