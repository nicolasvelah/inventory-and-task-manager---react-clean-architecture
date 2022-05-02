/* eslint-disable no-unused-vars */
// eslint-disable-next-line object-curly-newline
import React, { createContext, useContext, useState } from 'react';
import Place from '../../../domain/models/place';

type PlacesContent = {
  places: Place[];
  setPlaces: (newPlaces: Place[]) => void;
};
const PlacesContext = createContext<PlacesContent>({
  places: [],
  setPlaces: (newPlaces: Place[]) => {}
});

export const usePlacesContext = () => useContext(PlacesContext);

export const PlacesContextProvider: React.FC = ({ children }) => {
  const [places, setCurrentPlaces] = useState<Place[]>([]);

  return (
    <PlacesContext.Provider
      value={{
        places,
        setPlaces: (newPlaces: Place[]) => {
          setCurrentPlaces(newPlaces);
        }
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
