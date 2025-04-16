describe('Update User', () => {
    it('Successfully update user', () => {
        var user = {
            "name": "John Doe",
            "job": "Software Engineer"
        };
        cy.request('PUT', 'https://reqres.in/api/users/2',user).then((response) => {
            expect(response.status).equal(200);
            expect(response.body.name).to.equal(user.name);
            
            
        });
        
    });
    
});