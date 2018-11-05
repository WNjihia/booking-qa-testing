describe('Testing Hotel Booking Process', function () {
  beforeEach(function(){
    Cypress.Cookies.preserveOnce(cy.getCookies)
  })

  it('Visits the Booking Site', function () {
    cy.visit('https://booking.com');
    cy.url().should('include', 'booking.com')
  });

  

  });
