import  {useState, useContext, useEffect} from 'react';
import './PlanetCard.css';
import {PlanetInfoProps} from '../../interface';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import {UserContext} from '../../Context/UserContext';

const PlanetCard = ({title, date, explanation, url}: PlanetInfoProps): JSX.Element => {
  const {userLiked, addLiked, deleteLiked} = useContext(UserContext);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    checkedIfLiked();
  }, [])

  const userInput = () => {
    if (isLiked) {
      setIsLiked(false);
      deleteLiked(title);
    } else {
      setIsLiked(true);
      addLiked(title);
    }
  }

  const checkedIfLiked = () => {
    const liked = userLiked.find(likedTitle => likedTitle === title)
    if(liked !== undefined) {
      setIsLiked(true)
    } else {
      return
    }
  }

  return (
    <article className='slide'>
      <h1 className='title'>{title}</h1>
      <img src={url} alt={`picture of ${title}`} className='planetImage'/>
      <p className='moreInfo'>{explanation}</p>
      <div className='bottomLayout'>
        <p>{date}</p>
        {isLiked&& <AiFillHeart onClick={() => userInput()}></AiFillHeart>}
        {!isLiked && <AiOutlineHeart onClick={() => userInput()}></AiOutlineHeart>}
      </div>
    </article>
  )
}

export default PlanetCard;
