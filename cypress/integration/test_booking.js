describe('Testing Hotel Booking Process', function () {
  beforeEach(function(){
    Cypress.Cookies.preserveOnce(cy.getCookies)
  })

  it('Visits the Booking Site', function () {
    cy.visit('https://booking.com');
    cy.url().should('include', 'booking.com')
  });

  it('Searches for available hotels', () => {
    cy.get('#ss').type('London').should('have.value', 'London');
    cy.get('.sb-autocomplete__badge.sb-autocomplete__badge--popular')
      .first().click();
    cy.get('.bui-calendar__wrapper')
      .last()
      .find('tbody>tr')
      .last()
      .find('td')
      .first().click()
      .next().click();
    cy.get('.sb-searchbox__button').click();
    cy.url().should('include', 'booking.com/searchresults');
  });

  });
