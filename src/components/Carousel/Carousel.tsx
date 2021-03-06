import { useState, useEffect } from 'react';
import './Carousel.css';
import Arrow from '../Arrow/Arrow';
import {CarouselProps} from '../../interface';

const Carousel = ({slides}:CarouselProps):JSX.Element => {

  const [currentSlides, setCurrentSlides] = useState<JSX.Element[]>([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    buildNewSlideDeck(slideIndex);
  }, [slideIndex]);

  const nextSlide = () => {
    if (slideIndex >= slides.length - 1) {
      setSlideIndex(0);
    } else setSlideIndex(slideIndex + 1);
  }

  const previousSlide = () => {
    if (slideIndex <= 0) {
      setSlideIndex(slides.length - 1);
    } else setSlideIndex(slideIndex - 1);
  }

  const buildNewSlideDeck = (index: number) => {
    const newSlideDeck: JSX.Element[] = [];
    for(let i = index; i <= slides.length - 1 + index; i++){
      newSlideDeck.push(slides[i % slides.length]);
    }
    const display = addStyling(newSlideDeck);
    setCurrentSlides(display);
  }

  const addStyling = (deck: JSX.Element[]) => {
    const update = deck.map((card, i) => {
      if (i === 0) {
        return (
          <div className={`first`} key={i}>{card}</div>
        )
     } else if (i === 1) {
        return (
          <div className={`second`} key={i}>{card}</div>
        )
     } else if (i === deck.length - 1) {
        return (
          <div className={`last`} key={i}>{card}</div>
        )
     } else {
        return (
          <div className={`hide`} key={i}>{card}</div>
        )
      }
    })
    return update
  }

  return (
    <section className="carousel" data-cy='carousel'>
      <Arrow previousSlide={previousSlide} nextSlide={nextSlide} direction='left'></Arrow>
      {currentSlides ? currentSlides : slides}
      <Arrow previousSlide={previousSlide} nextSlide={nextSlide} direction='right'></Arrow>
    </section>
  )
}

export default Carousel;
