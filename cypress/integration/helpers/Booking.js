class Booking{
  fillName(value){
    const field = cy.get('#lastname')
    field.clear();
    field.type(value);

    return this;
  }

  fillEmail(value){
    const field = cy.get('#email')
    field.clear();
    field.type(value);

    return this;
  }

  fillEmailConfirm(value){
    const field = cy.get('#email_confirm')
    field.clear();
    field.type(value);

    return this;
  }

  submit(){
    const button = cy.get('.submit_holder_button');
    button.click();
  }
}

export default Booking;
