/* eslint-disable no-unused-vars */
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../../dependecy-injection';
import { PayloadCreateBox } from '../../../../../../domain/models/boxes';
import Catalog from '../../../../../../domain/models/catalog';
import { useBoxContext } from '../../../../../context/inventory/BoxContext/BoxContext';

import { UseFormBoxState, ValuesFormBox } from './useFormBoxState.interface';

const useFormBoxState: UseFormBoxState = () => {
  const [catalog, setCatalog] = useState<Catalog[]>([]);
  const { boxRepository, catalogRepository } = repository;
  const { boxList, setBoxList } = useBoxContext();

  const onFinishForm = async (values: ValuesFormBox) => {
    const hide = message.loading('Creando una caja ...');
    const {
      catalogId, totalMaterial, dataCollected
    } = values;
    try {
      const payloadCreateBox: PayloadCreateBox = {
        catalogId,
        totalMaterial,
        dataCollected,

      };
      console.log({ payloadCreateBox });

      const newBox = await boxRepository?.createBox(payloadCreateBox);
      if (newBox) {
        console.log({ newBox });
        await setBoxList([newBox, ...boxList]);
        console.log({ boxList });
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
      catalogRepository?.getCatalogs()
        .then((catalogData) => {
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
