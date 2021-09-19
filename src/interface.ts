export interface PlanetInfoProps {
  title: string,
  date: string,
  explanation: string,
  url: string
}

export interface CarouselProps {
  slides: JSX.Element[]
}

export interface UserContextProps {
  userLiked: string[],
  addLiked(titleToAdd: string): void,
  deleteLiked(titleToDelete: string): void
}

export interface ArrowProps {
  previousSlide(): void,
  nextSlide(): void,
  direction: string
}
