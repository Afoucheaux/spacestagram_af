import './LeftArrow.css'
import { FiArrowLeftCircle } from 'react-icons/fi'
import {LeftArrowProps} from '../../interface';

const LeftArrow = ({previousSlide}:LeftArrowProps) => {
  return (
    <div className="arrow leftArrow">
      <FiArrowLeftCircle onClick={() => previousSlide()} size='50' data-cy='leftArrow'></FiArrowLeftCircle>
    </div>
  );
}

export default LeftArrow;
