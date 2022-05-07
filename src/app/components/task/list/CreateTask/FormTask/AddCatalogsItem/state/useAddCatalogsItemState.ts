import { useEffect, useState } from 'react';
import { repository } from '../../../../../../../../dependecy-injection';
import Task from '../../../../../../../../domain/models/task';
import { CatalogItem } from '../../../../../../generic/catalog/AddCatalog/AddCatalog.interfaces';

const useAddCategoryItemState = (values: {
  // eslint-disable-next-line no-unused-vars
  handleCatalogSelected: (catalogs: CatalogItem[]) => void;
  initValues?: Task;
}) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [linkedCatalogs, setLinkedCatalogs] = useState<CatalogItem[]>([]);
  const [catalogs, setCatalogs] = useState<CatalogItem[]>([]);

  const { catalogRepository } = repository;

  useEffect(() => {
    catalogRepository?.getCatalogs().then((catalogsRepository) => {
      let catalogSelectedMap = catalogsRepository.map((item) => ({
        ...item,
        selected: false
      }));
      setCatalogs(catalogSelectedMap);

      if (values.initValues) {
        catalogSelectedMap = catalogSelectedMap.map((itemSelected) => {
          const itemFound = values.initValues!.catalogToInstall.find(
            (element) => itemSelected._id === element.id
          );
          return {
            ...itemSelected,
            selected: !!itemFound,
            numberOfItems: itemFound?.quantity ?? 1
          };
        });
        setCatalogs(catalogSelectedMap);

        const newLinkedCatalogs = catalogSelectedMap.filter((catalogItem) => {
          return values.initValues!.catalogToInstall.find(
            (element) => catalogItem._id === element.id
          );
        });

        setLinkedCatalogs(newLinkedCatalogs);
        values.handleCatalogSelected(newLinkedCatalogs);
      }
    });
  }, []);

  const handleCancel = () => {
    setVisibleModal(false);
  };

  const handleOpen = () => {
    setVisibleModal(true);
  };

  const handleLinkedItemClick = (currentList: CatalogItem[]) => {
    const newLinkedCatalogs = currentList.filter(
      (catalogItem) => !!catalogItem.selected
    );
    setLinkedCatalogs(newLinkedCatalogs);
    values.handleCatalogSelected(newLinkedCatalogs);
  };

  return {
    catalogs,
    visibleModal,
    linkedCatalogs,
    actions: {
      handleCancel,
      handleOpen,
      handleLinkedItemClick
    }
  };
};

export default useAddCategoryItemState;
