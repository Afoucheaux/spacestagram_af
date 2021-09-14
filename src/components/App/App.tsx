import {useState, useEffect} from 'react';
import './App.css';
import {getPlanetaryData} from '../../apiCalls';

function App() {
  const [planetaryData, setPlanetaryData] = useState([])

  useEffect(() => {
    getPlanetaryData()
    .then(data => setPlanetaryData(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <p>test</p>
  );
}

export default App;
