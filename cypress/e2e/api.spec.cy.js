describe('TODO api testing', () => {

  it('Test if GET response is correct - GET', () => {
      cy.api('/').as('getRequest');
      cy.get('@getRequest').then(request => {
          expect(request.status).to.eq(200);
      });
    });

  context('Test - create new user ', () =>{
    it('creates new user and validate that user has been added ',() =>{
      cy.api({
        method: 'POST',
        url:'/api/users',
        body: {
          "name": "maor",
          "job": "team-lead"
        }
      }).then((response) => {
        expect(response.status).to.equal(200| 201);
        expect(response.body.name).to.equal("maor")
        expect(response.body.job).to.equal("team-lead")
      })
    })

    })

  context('Test - User login ', () =>{
    it('succesful login',() =>{
      cy.api({
        method: 'POST',
        url:'/api/login',
        body: {
          "email": "eve.holt@reqres.in",
          "password": "pistol"
        }
      }).then((response) => {
        expect(response.status).to.equal(200)
      })
    })

    it('unsuccesful login',() =>{
      cy.api({
        method: 'POST',
        url:'/api/login',
        body: {
          "email": "fghrfdg",
          "password":"fdw"
        },
        failOnStatusCode: false 
      }).then((response) => {
        expect(response.status).to.equal(400)
      })
    })
  })

    context('Test - Delete user with ID 1 ', () =>{
    it('Deletes user',() =>{
      cy.api({
        method: 'DELETE',
        url:'/api/users/:id',
        body: {
          "id": "1",
        }
      }).then((response) => {
        expect(response.status).to.equal(204)
      })
    })
  })
  

   
      })
      