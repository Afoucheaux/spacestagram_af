export interface PlanetInfoProps {
  title: string,
  date: string,
  explanation: string,
  url: string
}
export interface RightArrowProps {
  nextSlide(): void
}

export interface LeftArrowProps {
  previousSlide(): void
}

export interface CarouselProps {
  slides: JSX.Element[]
}

export interface UserContextProps {
  userLiked: string[],
  addLiked(titleToAdd: string): void,
  deleteLiked(titleToDelete: string): void
}
