import React, {useState} from 'react';
import './PlanetCard.css';
import {PlanetInfo} from '../../interface';

const PlanetCard: React.FC<PlanetInfo> = ({title, date, explanation, url}): JSX.Element => {
  const [liked, setLiked] = useState(false);

  return (
    <article>
      <h1>{title}</h1>
    </article>
  )
}

export default PlanetCard;
