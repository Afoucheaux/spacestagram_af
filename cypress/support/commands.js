Cypress.Commands.add('stubGetPlanetaryDataJSON', () => {
  cy.intercept('https://api.nasa.gov/planetary/apod?api_key=RWiJWoTIhhkmJsg6Wejaa7n2Pdsxe0MmQaqhhLJY&count=10',
   {fixture: 'testApiCallDataStub.js'})
})
