import './LeftArrow.css';
import { FiArrowLeftCircle } from 'react-icons/fi';
import {leftArrowProps} from '../../interface';

const LeftArrow = ({previousSlide}:leftArrowProps) => {
  return (
    <div className="arrow">
      <FiArrowLeftCircle onClick={() => previousSlide()}></FiArrowLeftCircle>
    </div>
  );
}

export default LeftArrow;
