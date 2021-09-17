context('Spacestagram_af', () => {

  it('Should have a header on the main page, with the site title displayed on interval', () => {
    cy.stubGetPlanetaryDataJSON()
    cy.visit('http://localhost:3000/')
  })

})
