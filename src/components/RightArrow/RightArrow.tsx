import './RightArrow.css'
import { FiArrowRightCircle } from 'react-icons/fi'
import {rightArrowProps} from '../../interface';

const RightArrow = ({nextSlide}:rightArrowProps) => {
  return (
    <div className="arrow">
      <FiArrowRightCircle onClick={() => nextSlide()}></FiArrowRightCircle>
    </div>
  );
}

export default RightArrow;
