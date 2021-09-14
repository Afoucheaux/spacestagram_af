import  {useState} from 'react';
import './PlanetCard.css';
import {PlanetInfo} from '../../interface';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const PlanetCard = ({title, date, explanation, url}: PlanetInfo): JSX.Element => {
  const [liked, setLiked] = useState(false);

  const userInput = () => {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  }

  return (
    <article className='slide'>
      <h1 className='title'>{title}</h1>
      <img src={url} alt={`picture of ${title}`} className='planetImage'/>
      <p className='moreInfo'>{explanation}</p>
      <p>{date}</p>
      {liked && <AiFillHeart onClick={() => userInput()}></AiFillHeart>}
      {!liked && <AiOutlineHeart onClick={() => userInput()}></AiOutlineHeart>}
    </article>
  )
}

export default PlanetCard;
