import { useState, useEffect } from 'react';
import RightArrow from '../RightArrow/RightArrow';
import LeftArrow from '../LeftArrow/LeftArrow';
import './CarouselLayout.scss';
import {CarouselProps} from '../../interface';

const CarouselLayout = ({slides}:CarouselProps):JSX.Element => {

  const [currentSlides, setCurrentSlides] = useState<JSX.Element[]>([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    buildNewSlideDeck(slideIndex);
  }, [slideIndex]);

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
    const fill = addStyling(newSlideDeck);
    setCurrentSlides(fill);
  }

  const addStyling = (deck: JSX.Element[]) => {
    const sortedDeck = createLoop(deck)
    const update = sortedDeck.map((card, i) => {
      return (
        <div className={`card${i}`} key={i}>{card}</div>
      )
    })
    return update
  }

  const createLoop = (deck: JSX.Element[]) => {
    let newSlideDeck: JSX.Element[] = [];
      if (deck.length % 2 === 0) {
        newSlideDeck = evenLength(deck)
      } else {
        newSlideDeck = oddLength(deck)
      }
    return newSlideDeck;
  }

  const evenLength = (deck: JSX.Element[]) => {
    const newSlideDeck: JSX.Element[] = [];
    for(let i = 0; i < deck.length; i++) {
      if(i + deck.length / 2 >= deck.length) {
        newSlideDeck.push(deck[i - deck.length / 2])
      } else {
        newSlideDeck.push(deck[i + deck.length / 2])
      }
    }
    return newSlideDeck
  }

  const oddLength = (deck: JSX.Element[]) => {
    const newSlideDeck: JSX.Element[] = [];
    for(let i = 0; i < deck.length; i++) {
      if(i + Math.floor(deck.length / 2) >= deck.length - 1) {
        newSlideDeck.push(deck[i - Math.floor(deck.length / 2)])
      } else {
        newSlideDeck.push(deck[i + Math.ceil(deck.length / 2)])
      }
    }
    return newSlideDeck
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
