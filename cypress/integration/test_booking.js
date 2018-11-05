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

  it('Visits reservation page', () => {
    cy.get('.sr-hotel__title a').first().invoke('removeAttr', 'target').click();
    cy.url().should('include', 'booking.com/hotel')
    cy.get('.hprt-nos-select').first().select(`1`).should('have.value', '1');
    cy.get('.js-reservation-button').first().click({ force: true });
  });

  it('Make booking', () => {
    cy.get('#lastname').type('Tester').should('have.value', 'Tester');
    cy.get('#email').type('test@test.com').should('have.value', 'test@test.com');
    cy.get('#email_confirm').type('test@test.com').should('have.value', 'test@test.com');
    cy.get('.submit_holder_button').click()
  });

  });
