import {useState, useEffect} from 'react';
import './App.css';
import {getPlanetaryDataJSON} from '../../apiCalls';

function App() {
  const [planetaryData, setPlanetaryData] = useState([])

  useEffect(() => {
    getPlanetaryDataJSON()
    .then(data => setPlanetaryData(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <p>test</p>
  );
}

export default App;
