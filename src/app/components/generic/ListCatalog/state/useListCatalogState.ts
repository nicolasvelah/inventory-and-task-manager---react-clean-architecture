import { useEffect, useState } from 'react';
import { CatalogItem } from '../../catalog/AddCatalog/AddCatalog.interfaces';
import { UseListCatalogState } from './useListCatalogState.interfaces';

const useListCatalogState: UseListCatalogState = (catalogs) => {
  const [currentCatalogs, setCurrentCatalogs] = useState<CatalogItem[]>([]);

  useEffect(() => {
    setCurrentCatalogs(catalogs);
  }, [catalogs]);

  const handleCatalogClick = (
    catalog: CatalogItem,
    // eslint-disable-next-line no-unused-vars
    handleItemClick: (currentList: CatalogItem[]) => void
  ) => {
    const newCatalogs = currentCatalogs.map((item) => {
      const newItem = { ...item };
      if (item._id === catalog._id) {
        newItem.selected = !newItem.selected;
      }

      return newItem;
    });
    setCurrentCatalogs(newCatalogs);
    handleItemClick(newCatalogs);
  };

  const handleInputNumber = (catalog: CatalogItem) => (value: number) => {
    const newCatalogs = currentCatalogs.map((item) => {
      const newItem = { ...item };
      if (item._id === catalog._id) {
        newItem.numberOfItems = value;
      }

      return newItem;
    });
    setCurrentCatalogs(newCatalogs);
  };

  return {
    currentCatalogs,
    actions: {
      handleCatalogClick,
      handleInputNumber
    }
  };
};
export default useListCatalogState;
