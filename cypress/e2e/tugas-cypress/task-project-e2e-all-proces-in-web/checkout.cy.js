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

	it('Menambahkan 3 produk ke keranjang', () => {
		// Tambahkan produk ke keranjang menggunakan custom command
		cy.addProductsToCart(['product1', 'product2', 'product3'])
		// Pastikan jumlah item di keranjang adalah 3
		cy.get('.shopping_cart_badge').should('contain', '3')
	})

	it('Melakukan checkout dan mengisi data pengiriman', () => {
		// cy.fixture('datapengiriman').then(data => {
		// 	const { firstName, lastName, postalCode } = data

		// Melakukan checkout dengan custom command dan menggnakan data dari fixture
		cy.checkout('Albarokah', 'Rifansah', '12345')
	})
})
// })
