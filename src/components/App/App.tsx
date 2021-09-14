import {useState, useEffect} from 'react';
import './App.css';
import {getPlanetaryDataJSON} from '../../apiCalls';
import PlanetCard from '../PlanetCard/PlanetCard';
import {PlanetInfo} from '../../interface';
import Header from '../Header/Header';

function App() {
  const [planetaryDisplay, setPlanetaryDisplay] = useState<JSX.Element[]>();

  useEffect(() => {
    getPlanetaryDataJSON()
    .then(data => planetDislay(data))
    .catch(err => console.log(err))
  }, [])

  const planetDislay = (data: PlanetInfo[]) => {
    const display = data.map((planet, i) => {
      return (
        <PlanetCard
          key={i}
          title={planet.title}
          date={planet.date}
          explanation={planet.explanation}
          url={planet.url}
        />
      )
    })
  setPlanetaryDisplay(display)
  }

  return (
    <>
      <Header />
      {!planetaryDisplay && <p>Preparing For Liftoff...</p>}
      <section className='dipslayLayout'>
        {planetaryDisplay}
      </section>
    </>
  );
}

export default App;
