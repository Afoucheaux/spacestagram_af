import React, { useState, useEffect } from 'react';
import RightArrow from '../RightArrow/RightArrow';
import LeftArrow from '../LeftArrow/LeftArrow';
import './CarouselLayout.css';
import {CarouselProps} from '../../interface';

const CarouselLayout = ({slides}:CarouselProps):JSX.Element => {

  const [currentSlides, setCurrentSlides] = useState<JSX.Element[]>([]);
  const [slideIndex, setSlideIndex] = useState(0);

  const previousSlide = () => {
    if (slideIndex >= slides.length - 1) {
      setSlideIndex(0);
    } else setSlideIndex(slideIndex + 1);
  }

  const nextSlide = () => {
    if (slideIndex <= 0) {
      setSlideIndex(slides.length - 1);
    } else setSlideIndex(slideIndex - 1);
  }

  const buildNewSlideDeck = (index: number) => {
    const newSlideDeck: JSX.Element[] = [];
    for(let i = index; i <= slides.length - 1 + index; i++){
      newSlideDeck.push(slides[i % slides.length]);
    }
    setCurrentSlides(newSlideDeck);
  }

  return (
    <section className="carousel">
      <LeftArrow previousSlide={previousSlide}></LeftArrow>
      {currentSlides ? currentSlides : slides}
      <RightArrow nextSlide={nextSlide}></RightArrow>
    </section>
  )
}

export default CarouselLayout;
