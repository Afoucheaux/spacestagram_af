const apodURL = 'https://api.nasa.gov/planetary/apod?api_key=';
const key = 'RWiJWoTIhhkmJsg6Wejaa7n2Pdsxe0MmQaqhhLJY'

export async function getPlanetaryDataJSON() {
  const response = await fetch(`${apodURL}${key}&count=10`);
  const planetaryData = await response.json();
  return planetaryData;
}
