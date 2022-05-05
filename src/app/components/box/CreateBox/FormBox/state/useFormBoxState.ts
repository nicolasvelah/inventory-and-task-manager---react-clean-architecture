/* eslint-disable no-unused-vars */
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../../dependecy-injection';
import { PayloadCreateBox } from '../../../../../../domain/models/boxes';
import Catalog from '../../../../../../domain/models/catalog';
import { useBoxContext } from '../../../../../context/inventory/BoxContext/BoxContext';

import { UseFormBoxState, ValuesFormBox } from './useFormBoxState.interface';

const useFormBoxState: UseFormBoxState = (initValues) => {
  const [catalog, setCatalog] = useState<Catalog[]>([]);
  const { boxRepository, catalogRepository } = repository;
  const { boxList, setBoxList } = useBoxContext();

  const onFinishForm = async (values: ValuesFormBox) => {
    if (initValues) {
      const hideUpdated = message.loading('Actualizando un item de cajas ...');

      boxRepository
        ?.update(initValues.attributes._id, {
          catalogId: values.catalogId,
          dataCollected: values.dataCollected,
          totalMaterial: values.totalMaterial
        })
        .then((boxUpdated) => {
          const newCatalog = boxList.map((item) => {
            if (item.attributes._id === boxUpdated.attributes._id) {
              return boxUpdated;
            }
            return item;
          });

          setBoxList(newCatalog);
          message.success('Caja actualizada.');
        })
        .finally(() => {
          hideUpdated();
        })
        .catch(() => {
          message.error('No se pudo actualizar la caja.');
        });
      return;
    }

    const hide = message.loading('Creando una caja ...');
    const { catalogId, totalMaterial, dataCollected } = values;
    try {
      const payloadCreateBox: PayloadCreateBox = {
        catalogId,
        totalMaterial,
        dataCollected
      };

      const newBox = await boxRepository?.createBox(payloadCreateBox);
      if (newBox) {
        setBoxList([newBox, ...boxList]);
      }

      message.success('Caja creada');
    } catch (error) {
      message.error('Error al crear la caja');
    } finally {
      hide();
    }
  };

  useEffect(() => {
    if (catalog.length === 0) {
      catalogRepository?.getCatalogs('notControlled').then((catalogData) => {
        setCatalog(catalogData);
      });
    }
  }, [catalog]);

  return {
    catalog,
    onFinishForm
  };
};

export default useFormBoxState;
