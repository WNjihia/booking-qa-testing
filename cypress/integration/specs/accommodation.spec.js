import HomePage from '../helpers/HomePage';
import Reservation from '../helpers/Reservation';
import Booking from '../helpers/Booking';

describe('Booking Process', () => {
  before(() => {
    Cypress.Cookies.preserveOnce(cy.getCookies());
  })

  it('should search for available hotels', () => {
    const home = new HomePage();
    home.visit();

    home.fillSearchField('London')
        .fillDate(3)
        .fillDate(4)
        .submit();
    cy.url().should('include', 'booking.com/searchresults');
  });

  it('should load reservation page', () => {
    const reservation = new Reservation();
    reservation.selectHotel()
               .selectRooms('1')
               .submit();
  });

  it('should make booking', () => {
    const booking = new Booking();
    booking.fillName('Tester')
           .fillEmail('test@test.com')
           .fillEmailConfirm('test@test.com')
           .submit();
  });


});
