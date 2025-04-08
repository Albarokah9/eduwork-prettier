/// <reference types="cypress" />

describe('Check Out Product', () => {
	beforeEach(() => {
		// Kunjungi halaman login
		cy.visit('https://www.saucedemo.com/')
		// Login menggunakan custom command dengan menggunakan fixture
		cy.loginWithFixture2('validUser')
		// Assertion: Memastikan berhasil login
		cy.url().should('include', '/inventory.html')
		cy.get('.title').should('contain', 'Products')
	})

	it('Menambahkan 3 product ke keranjang', () => {
		// Menambahkan produk ke keranjang belanja
		// cy.get('.btn_inventory').contains('Add to cart').click()
		// // Memastikan produk berhasil ditambahkan ke keranjang
		// cy.get('.shopping_cart_badge').should('contain', '1')

		// Tambahkan produk berdasarkan key di fixture
		// Menggunakan custom command untuk menambahkan produk ke keranjang
		// Menggunakan fixture untuk mendapatkan data produk
		// Mengambil data dari fixture file products.json
		// cy.fixture('products').then(products => {
		//     const productKeys = ['product1', 'product2', 'product3']
		//     productKeys.forEach(productKey => {
		//         const product = products[productKey]
		//         cy.get(product.buttonSelector).click()
		//     })
		cy.addProductsToCart(['product1', 'product2', 'product3'])

		// Pastikan jumlah item di keranjang adalah 3
		cy.get('.shopping_cart_badge').should('contain', '3')
		cy.pause()
	})

	it('Melakukan check out', () => {
		cy.get('.shopping_cart_link').click()
		// Memastikan berada di halaman keranjang belanja
		cy.url().should('include', '/cart.html')
		cy.get('.title').should('contain', 'Your Cart')
		// Klik tombol "CHECKOUT"
		cy.get('.btn_action.checkout_button').click()
		// Memastikan berada di halaman informasi pengiriman
		cy.url().should('include', '/checkout-step-one.html')
		cy.get('.title').should('contain', 'Checkout: Your Information')
		// // Mengisi data
		// cy.get('#first-name').type('Albarokah')
		// cy.get('#last-name').type('Rifansah')
		// cy.get('#postal-code').type('12345')
		// // Klik tombol "CONTINUE"
		// cy.get('.btn_primary.cart_button').click()
		// // Memastikan berada di halaman ringkasan pesanan
		// cy.url().should('include', '/checkout-step-two.html')
		// cy.get('.title').should('contain', 'Checkout: Overview')
		// // Klik tombol "FINISH"
		// cy.get('.btn_action.cart_button').click()
		// // Memastikan berada di halaman konfirmasi pesanan
		// cy.url().should('include', '/checkout-complete.html')
		// cy.get('h2').should('contain', 'Thank you for your order!')
		// cy.get('.complete-text').should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
	})

	it('Mengisi data pembeli', () => {
		cy.get('.shopping_cart_link').click()
		cy.url().should('include', '/cart.html')
		cy.get('.title').should('contain', 'Your Cart')

		// Klik tombol "CHECKOUT"
		cy.get('.btn_action.checkout_button').click()
		cy.url().should('include', '/checkout-step-one.html')
		cy.get('.title').should('contain', 'Checkout: Your Information')

		// Mengisi data
		cy.get('#first-name').type('Albarokah')
		cy.get('#last-name').type('Rifansah')
		cy.get('#postal-code').type('12345')
		// Klik tombol "CONTINUE"
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

	/// bagaimana cara yang tepat untuk mendefinisakan it dengan benar
})

// Atribut	Format Cypress	Contoh
// id=	      #idName	        cy.get('#user-name')
// class=	  .className	    cy.get('.btn-primary')
// type=	  [type="value"]	cy.get('[type="text"]')

// Atribut lain	[atribut="value"]	cy.get('[data-test="login-button"]')
// Gabungan	tagname#idName.className[type="value"]	cy.get('input#user-name[type="text"]')

// belum bikin costume command untuk checkout dan fixture checkout
