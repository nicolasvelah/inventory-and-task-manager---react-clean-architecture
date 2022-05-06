/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { CatalogItem } from '../AddCatalog.interfaces';
import { UseAddCatalogState } from './useAddCatalogState.interface';

const useAddCatalogState: UseAddCatalogState = ({
  catalogs,
  linkedCatalogs,
  handleLinkedCatalogs,
  handleCancelModal
}) => {
  const [catalogsMenu, setCatalogsMenu] = useState<CatalogItem[]>([]);

  useEffect(() => {
    const syncCatalogs = catalogsMenu.map((item) => {
      const newItemCatalogMenu = { ...item };
      const catalogLinked = linkedCatalogs.find(
        (linkedItem) => linkedItem._id === item._id
      );
      newItemCatalogMenu.selected = !!catalogLinked;

      return newItemCatalogMenu;
    });

    setCatalogsMenu(syncCatalogs);
  }, [linkedCatalogs]);

  useEffect(() => {
    setCatalogsMenu([...catalogs]);
  }, [catalogs]);

  const handleCurrentCatalogsMenu = (currentCatalogs: CatalogItem[]) => {
    setCatalogsMenu(currentCatalogs);
  };

  const handleSaveCatalogs = () => {
    handleLinkedCatalogs(catalogsMenu);
    handleCancelModal();
  };

  return {
    catalogsMenu,
    actions: {
      handleSaveCatalogs,
      handleCurrentCatalogsMenu
    }
  };
};

export default useAddCatalogState;
