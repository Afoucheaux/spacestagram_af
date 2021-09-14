import './LeftArrow.scss';
import { FiArrowLeftCircle } from 'react-icons/fi';

const LeftArrow = ({previousSlide}:any) => {
  return (
    <div className="arrow">
      <FiArrowLeftCircle onClick={() => previousSlide()}></FiArrowLeftCircle>
    </div>
  );
}

export default LeftArrow;
