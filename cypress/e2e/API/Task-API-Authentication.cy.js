// describe('Login Test using API', () => {
//     beforeEach(() => {
//         cy.loginViaAPI(); // Memanggil command login sebelum menjalankan tes
//     });

//     it('Should successfully navigate to main page after login', () => {
//         // Memastikan halaman yang di-visit sesuai setelah login
//         cy.url().should('include', '/#!/main');
//     });

//     it('Should have session cookies set', () => {
//         // Memastikan cookie sessionId, userId, userName ada
//         cy.getCookie('sessionId').should('exist');
//         cy.getCookie('userId').should('exist');
//         cy.getCookie('userName').should('exist');
//     });
// });

it('login Test using API', () => {
    cy.loginViaAPI()
    
});
