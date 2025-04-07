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
Cypress.Commands.add('login',(username, password) => {
    // cy.clearCookies()
    // cy.clearLocalStorage()

    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()

})

Cypress.Commands.add('loginWithFixture', (userType) => {
    cy.fixture('dua').then((data) => {
      const username = data[userType].username;
      const password = data[userType].password;
  
      // Isi form login dan klik tombol login
      cy.get('#user_login').type(username);
      cy.get('#user_password').type(password);
      cy.contains('Sign in').click();
    });
  });