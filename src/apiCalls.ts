const apodURL = 'https://api.nasa.gov/planetary/apod?api_key=';
const key = 'RWiJWoTIhhkmJsg6Wejaa7n2Pdsxe0MmQaqhhLJY'

export const getPlanetaryData = () => {
  return fetch(`${apodURL}${key}&count=5`)
  .then(response => response.json())
}





// const apodURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5';
