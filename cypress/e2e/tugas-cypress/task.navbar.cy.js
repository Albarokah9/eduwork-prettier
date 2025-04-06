/// <reference types="cypress" />

describe('Navbar test', () => {
    beforeEach(() => {
     cy.visit('http://zero.webappsecurity.com/index.html');
    });
 
    it('Should display online banking content', () => {
     // cy.pause();
     cy.get('#onlineBankingMenu').click();
     cy.url().should('include', 'online-banking.html');
     cy.get('h1',).should('contain.text', 'Online Banking');
     cy.get('p',).should('contain.text', 'Pay bills easily');
    });
     
    it('Should display feedback content', () => {
     // cy.pause();
     cy.get('#feedback').click();
     cy.url().should('include', 'feedback.html');
     cy.get('h3').should('contain.text', 'Feedback');

    });
 
    it('Should display homepage content ', () => {
     // cy.pause();
     cy.contains('Zero Bank').click();
     cy.url().should('include', 'index.html');
     cy.get('h4').should('contain.text', 'Online Banking');
     cy.get('p').should('contain.text', 'Welcome to Zero Online Banking. Zero provides a greener and more convenient way to manage your money. Zero enables you to check your account balances, pay your bills, transfer money, and  keep detailed records of your transactions,  wherever there is an internet connection.')

    });
 
 });