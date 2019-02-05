class Reservation{
  selectHotel(){
    const value = cy.get('.sr-hotel__title a').first().invoke('removeAttr', 'target')
    value.click();

    return this;
  }
  selectRooms(value){
    const field = cy.get('.hprt-nos-select').first().select(value)

    return this;
  }

  submit(){
    const button = cy.get('.js-reservation-button').first()
    button.click({ force: true });
  }
}

export default Reservation;
