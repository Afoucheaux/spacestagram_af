import { createContext, useState } from 'react';
import {UserContextProps} from '../interface';

const defaultState = {
  userLiked: [],
  addLiked: () => {},
  deleteLiked: () => {}
}

export const UserContext = createContext<UserContextProps>(defaultState);

export const UserContextProvider: React.FC = ({ children }) => {
  const [userLiked, setUserLiked] = useState<string[]>([]);

  const addLiked = (titleToAdd: string) => {
    const toAdd = userLiked.find(title => title === titleToAdd)
    if (toAdd === undefined) {
      const adding = [...userLiked, titleToAdd]
      setUserLiked(adding)
    } else {
      return
    }
  }

  const deleteLiked = (titleToDelete: string) => {
    const toDelete = userLiked.filter(likeTitle => likeTitle !== titleToDelete)
    setUserLiked(toDelete)
  }

  return (
    <UserContext.Provider value={{userLiked, addLiked, deleteLiked}}>
      {children}
    </UserContext.Provider>
  )
}
