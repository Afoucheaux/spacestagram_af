import './Arrow.css'
import {ArrowProps} from '../../interface';
import { FiArrowLeftCircle } from 'react-icons/fi'
import { FiArrowRightCircle } from 'react-icons/fi';

const Arrow = ({previousSlide, nextSlide, direction}: ArrowProps ) => {
  return (
    <div className={`arrow ${direction}Arrow`}>
      {direction === 'left' && <FiArrowLeftCircle onClick={() => previousSlide()} size='50' data-cy='leftArrow'></FiArrowLeftCircle>}
      {direction === 'right' && <FiArrowRightCircle onClick={() => nextSlide()} size='50' data-cy='rightArrow'></FiArrowRightCircle>}
    </div>
  );
}

export default Arrow;
