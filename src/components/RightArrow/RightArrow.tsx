import './RightArrow.css'
import { FiArrowRightCircle } from 'react-icons/fi'

interface RightArrowProps {
  nextSlide():void
}

const RightArrow = ({nextSlide}:RightArrowProps) => {
  return (
    <div className="arrow">
      <FiArrowRightCircle onClick={() => nextSlide()}></FiArrowRightCircle>
    </div>
  );
}

export default RightArrow;
