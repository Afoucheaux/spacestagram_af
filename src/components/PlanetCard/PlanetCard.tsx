import  {useState} from 'react';
import './PlanetCard.css';
import {PlanetInfoProps} from '../../interface';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const PlanetCard = ({title, date, explanation, url}: PlanetInfoProps): JSX.Element => {
  const [userLiked, setUserLiked] = useState(false);

  const userInput = () => {
    if (userLiked) {
      setUserLiked(false);
    } else {
      setUserLiked(true);
    }
  }

  return (
    <article className='slide'>
      <h1 className='title'>{title}</h1>
      <img src={url} alt={`picture of ${title}`} className='planetImage'/>
      <p className='moreInfo'>{explanation}</p>
      <div className='bottomLayout'>
        <p>{date}</p>
        {userLiked && <AiFillHeart onClick={() => userInput()}></AiFillHeart>}
        {!userLiked && <AiOutlineHeart onClick={() => userInput()}></AiOutlineHeart>}
      </div>
    </article>
  )
}

export default PlanetCard;
