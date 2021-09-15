import './RightArrow.scss';
import { FiArrowRightCircle } from 'react-icons/fi';
import {RightArrowProps} from '../../interface';

const RightArrow = ({nextSlide}:RightArrowProps) => {
  return (
    <div className="arrow">
      <FiArrowRightCircle onClick={() => nextSlide()}></FiArrowRightCircle>
    </div>
  );
}

export default RightArrow;
