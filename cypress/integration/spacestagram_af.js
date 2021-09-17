context('Spacestagram_af', () => {

  it('Should have a loading message on page load.', () => {
    cy.stubGetPlanetaryDataJSON()
    cy.visit('http://localhost:3000/')
    .get('[data-cy=loadingMessage]').contains('Preparing For Liftoff...')
  })

  it('Should show an error message if api is down', () => {
    cy.sadPathTesting()
    cy.visit('http://localhost:3000/')
    .get('[data-cy=errorMessage]').contains('Server is currently unavailable. Please try back later.')
  })

  it('Should have a header on the main page, with the site title displayed.', () => {
    cy.stubGetPlanetaryDataJSON()
    cy.visit('http://localhost:3000/')
    .get('[data-cy=headerLayout]').should('exist')
    .get('[data-cy=siteTitle]').contains('SPACESTAGRAM')
  })

  it('Should build planetCards that displays on load and are able to like and unlike.', () => {
    cy.stubGetPlanetaryDataJSON()
    cy.visit('http://localhost:3000/')
    .get('[data-cy=slide]').should('exist')
    .get('[data-cy=title]').contains('Test Data ZERO')
    .get('[data-cy=planetImage]').should('exist')
    .get('[data-cy=moreInfo]').contains('Stuff for test Zero explanation.')
    .get('[data-cy=date]').contains('07-23-2016')
    .get('[data-cy=outlineHeart]').first().click()
    .get('[data-cy=fullHeart]').should('exist')
    .get('[data-cy=fullHeart]').first().click()
    .get('[data-cy=outlineHeart]').should('exist')
  })

  it('Should load the planetCards into the carousel that should be able to rotate left and right though the card.', () => {
    cy.stubGetPlanetaryDataJSON()
    cy.visit('http://localhost:3000/')
    .get('[data-cy=carousel]').should('exist')
    .get('[data-cy=title]').contains('Test Data ZERO')
    .get('[data-cy=leftArrow]').click().click()
    .get('[data-cy=title]').contains('Test Data THREE')
    .get('[data-cy=rightArrow]').click().click()
    .get('[data-cy=title]').contains('Test Data ZERO')
  })

  it('Should be able to show that a planet is liked after carousel rotation.', () => {
    cy.stubGetPlanetaryDataJSON()
    cy.visit('http://localhost:3000/')
    .get('[data-cy=outlineHeart]').first().click()
    .get('[data-cy=rightArrow]').click().click().click().click().click()
    .get('[data-cy=fullHeart]').should('exist')
  })

})
