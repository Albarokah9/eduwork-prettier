/// <reference types="cypress" />
describe('Automation Login dengan kredensial invalid dan valid menggunakan fixtures dan Logout', () => {

    beforeEach(() => {
        // Mengunjungi halaman login sebelum setiap tes
        cy.visit('http://zero.webappsecurity.com/login.html')
    })

    it('Login dengan kredensial tidak valid', () => {
        // Mengambil data dari fixture file dua.json
        cy.fixture("dua").then((data) => {
            const username = data.invalidUser.username
            const password = data.invalidUser.password

            // Mengisi form login dengan kredensial tidak valid , menggunakan custom command
            cy.login(username, password)

            // // Mengisi form login dengan kredensial tidak valid
            // cy.get('#user_login').type(username)
            // cy.get('#user_password').type(password)
            // cy.contains('Sign in').click()

            // Assertion: Memastikan muncul pesan kesalahan
            cy.get('.alert-error').should('be.visible')
                .and('contain', 'Login and/or password are wrong.')
        })
    })

    it('Login dengan kredensial valid dan logout', () => {
        // Mengambil data dari fixture file dua.json
        cy.fixture("dua").then((data) => {
            const username = data.validUser.username;
            const password = data.validUser.password;

            // Mengisi form login dengan kredensial valid
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.contains('Sign in').click()

            // Assertion: Memastikan login berhasil
            cy.url().should('not.include', 'login.html')
            cy.get('.nav-tabs').should('contain', 'Account Summary')

            // // Logout dari aplikasi
            // cy.get('.icon-user').click()  // Klik ikon user
            // cy.contains('Logout').click()  // Klik tombol logout

            // // Assertion: Memastikan logout berhasil
            // cy.url().should('include', 'index.html')
            // cy.get('#signin_button').should('be.visible')
        })
    })

    it('Memastikan sudah logout', () => {
        
        cy.fixture("dua").then((data) => {
            const username = data.validUser.username;
            const password = data.validUser.password;

            // Mengisi form login dengan kredensial valid
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.contains('Sign in').click()

            // Assertion: Memastikan login berhasil
            cy.url().should('not.include', 'login.html')
            cy.get('.nav-tabs').should('contain', 'Account Summary')

            cy.get('.icon-user').click()  // Klik ikon user
            cy.contains('Logout').click()  // Klik tombol logout
            
            // Assertion: Memastikan logout berhasil
            cy.url().should('include', 'index.html')
            cy.get('#signin_button').should('be.visible')
        })
        
    });

})


