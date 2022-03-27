/* eslint-disable no-unused-vars */
// eslint-disable-next-line object-curly-newline
import React, { createContext, useContext, useState } from 'react';
import Catalog from '../../../domain/models/catalog';

type CatalogContent = {
  catalogs: Catalog[];
  setCatalogs: (newCatalogs: Catalog[]) => void;
};
const CatalogContext = createContext<CatalogContent>({
  catalogs: [],
  setCatalogs: (newCatalogs: Catalog[]) => {}
});

export const useCatalogContext = () => useContext(CatalogContext);

export const CatalogContextProvider: React.FC = ({ children }) => {
  const [catalogs, setCurrrentCatalogs] = useState<Catalog[]>([]);

  return (
    <CatalogContext.Provider
      value={{
        catalogs,
        setCatalogs: (newCatalogs: Catalog[]) => {
          setCurrrentCatalogs(newCatalogs);
        }
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};
