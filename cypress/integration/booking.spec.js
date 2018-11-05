const setDate = (row) => {
  return cy.get('.bui-calendar__wrapper')
  .last()
  .find(`tbody>tr:nth-child(${row})`)
  .find('td').first().click();
};

describe('Booking Process', () => {
  before(() => {
    Cypress.Cookies.preserveOnce(cy.getCookies);
  })

  it('visit booking.com', () => {
    cy.visit('https://booking.com');
    cy.url().should('include', 'booking.com');
  });

  it('search for available hotels', () => {
    cy.get('#ss').type('London').should('have.value', 'London');
    cy.get('.sb-autocomplete__badge.sb-autocomplete__badge--popular')
      .first().click();
    setDate(3); // checkin date
    setDate(4); // checkout date
    cy.get('.sb-searchbox__button').click();
    cy.url().should('include', 'booking.com/searchresults');
  });

  it('go to reservation page', () => {
    cy.get('.sr-hotel__title a').first().invoke('removeAttr', 'target').click();
    cy.url().should('include', 'booking.com/hotel');
    cy.get('.hprt-nos-select').first().select(`1`).should('have.value', '1');
    cy.get('.js-reservation-button').first().click({ force: true });
  });

  it('make reservation', () => {
    cy.get('#lastname').type('Tester').should('have.value', 'Tester');
    cy.get('#email').type('test@test.com').should('have.value', 'test@test.com');
    cy.get('#email_confirm').type('test@test.com').should('have.value', 'test@test.com');
    cy.get('.submit_holder_button').click();
  });

  });
