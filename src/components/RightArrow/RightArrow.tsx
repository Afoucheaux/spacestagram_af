import './RightArrow.css';
import { FiArrowRightCircle } from 'react-icons/fi';
import {RightArrowProps} from '../../interface';

const RightArrow = ({nextSlide}:RightArrowProps) => {
  return (
    <div className="arrow">
      <FiArrowRightCircle onClick={() => nextSlide()} size='50' data-cy='rightArrow'></FiArrowRightCircle>
    </div>
  );
}

export default RightArrow;
