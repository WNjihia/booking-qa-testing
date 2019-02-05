class HomePage {
  visit(){
    cy.visit('https://booking.com');
  }

  fillSearchField(value){
    const field = cy.get('#ss')
    field.clear();
    field.type(value);
    cy.get('.sb-autocomplete__badge.sb-autocomplete__badge--popular')
      .first().click();

    return this;
  }

  fillDate(row){
    const field = cy.get('.bui-calendar__wrapper')
    .last()
    .find(`tbody>tr:nth-child(${row})`)
    .find('td').first().click();

    return this;
  }

  flightLink(){
    const link = cy.get('.xpb__link').eq(1);

    return link;
  }

  submit(){
    const button = cy.get('.sb-searchbox__button');
    button.click();
  }

}

export default HomePage;
