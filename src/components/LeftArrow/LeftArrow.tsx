import React from 'react';
import './LeftArrow.scss'
import { FiArrowLeftCircle } from 'react-icons/fi'
/**
 * @props Passed down function from carousel layout that decrements currentSlideIndex - 1
 *
 * @renders left arrow that navigates to the previous slide on click
 */
const LeftArrow = ({previousSlide}:any) => {
  return (
    <div className="arrow">
      <FiArrowLeftCircle onClick={() => previousSlide()}></FiArrowLeftCircle>
    </div>
  );
}

export default LeftArrow;
