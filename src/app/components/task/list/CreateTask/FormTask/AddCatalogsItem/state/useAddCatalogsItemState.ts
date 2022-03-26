import { useEffect, useState } from 'react';
import { repository } from '../../../../../../../../dependecy-injection';
import { CatalogItem } from '../../../../../../generic/catalog/AddCatalog/AddCatalog.interfaces';

/* const FAKE_DATA: Catalog[] = [
  {
    _id: '123',
    device: 'device',
    brand: 'brand',
    referenceModel: 'referenceModel',
    typePlace: 'ATM',
    unitOfMeasurement: 'unitOfMeasurement',
    state: 'stock',
    type: 'controlled'
  },
  {
    _id: '1234',
    device: 'device',
    brand: 'brand',
    referenceModel: 'referenceModel',
    typePlace: 'ATM',
    unitOfMeasurement: 'unitOfMeasurement',
    state: 'stock',
    type: 'controlled'
  },
  {
    _id: '12345',
    device: 'device',
    brand: 'brand',
    referenceModel: 'referenceModel',
    typePlace: 'ATM',
    unitOfMeasurement: 'unitOfMeasurement',
    state: 'stock',
    type: 'controlled'
  }
]; */

const useAddCategoryItemState = (values: {
  // eslint-disable-next-line no-unused-vars
  handleCatalogSelected: (catalogs: CatalogItem[]) => void;
}) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [linkedCatalogs, setLinkedCatalogs] = useState<CatalogItem[]>([]);
  const [catalogs, setCatalogs] = useState<CatalogItem[]>([]);

  const { catalogRepository } = repository;

  useEffect(() => {
    catalogRepository?.getCatalogs().then((catalogsRepository) => {
      setCatalogs(
        catalogsRepository.map((item) => ({ ...item, selected: false }))
      );
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
