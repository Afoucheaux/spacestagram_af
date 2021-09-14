export interface PlanetInfo {
  title: string,
  date: string,
  explanation: string,
  url: string
}

export interface CarouselProps {
  slides: JSX.Element[];
}

export interface leftArrowProps {
  previousSlide():void
}

export interface rightArrowProps {
  nextSlide():void,
}
