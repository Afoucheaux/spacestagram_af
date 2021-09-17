import {useState, useEffect} from 'react';
import './App.css';
import {getPlanetaryDataJSON} from '../../apiCalls';
import PlanetCard from '../PlanetCard/PlanetCard';
import {PlanetInfoProps} from '../../interface';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';

function App() {
  const [planetaryDisplay, setPlanetaryDisplay] = useState<JSX.Element[]>();
  const [apiError, setApiError] = useState(false)

  useEffect(() => {
    getPlanetaryDataJSON()
    .then(data => planetDislay(data))
    .catch(err => handleError(err))
  }, [])

  const planetDislay = (data: PlanetInfoProps[]) => {
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
    setApiError(false)
  }

  const handleError = (errorMessage: string) => {
    console.log(errorMessage);
    setApiError(true);
  }

  return (
    <>
      <Header />
      <section className='dipslayLayout'>
        {apiError && <p className='message'>Server is currently unavailable. Please try back later.</p>}
        {!planetaryDisplay && <p className='message'>Preparing For Liftoff...</p>}
        {planetaryDisplay && <Carousel slides={planetaryDisplay} />}
      </section>
    </>
  );
}

export default App;
