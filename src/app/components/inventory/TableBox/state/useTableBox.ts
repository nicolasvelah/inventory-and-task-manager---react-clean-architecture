/* eslint-disable object-curly-newline */
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../dependecy-injection';
import {
  FragmentBox,
  ResponseBox
} from '../../../../../domain/repositories/box-repository';
import { OnClickCell } from '../../../../../utils/columns';
import {
  DataTableBox,
  FragmentValue,
  useBoxContext
} from '../../../../context/inventory/BoxContext/BoxContext';

const useTableBox = () => {
  const [dataTable, setDataTable] = useState<DataTableBox[]>([]);

  const [viewModal, setViewModal] = useState<boolean>(false);
  const [valueToEdit, setValueToEdit] = useState<ResponseBox | null>(null);

  const {
    rowSelection,
    boxList,
    setItemSelected,
    setViewDrawer,
    setBoxList,
    canItBeFragmented
  } = useBoxContext();

  const getFragments = (fragment: FragmentBox[], unitOfMeasurement: string) => {
    const total: FragmentValue[] = [];
    const remaining: FragmentValue[] = [];
    const technical: FragmentValue[] = [];

    fragment.forEach((item) => {
      total.push({
        unitOfMeasurement: unitOfMeasurement ?? '',
        value: item.attributes.totalFragment.toString()
      });

      const remainingValue = item.inventory?.reduce((accum, current) => {
        return accum + (current.spentMaterial ?? 0);
      }, 0);

      remaining.push({
        unitOfMeasurement: unitOfMeasurement ?? '',
        value: remainingValue.toString()
      });

      if (
        item.inventory.length > 0 &&
        typeof item.inventory[0].user === 'object'
      ) {
        const { user } = item.inventory[0];
        technical.push({
          unitOfMeasurement: unitOfMeasurement ?? '',
          value: `${user.name} ${user.lastName}`
        });
      }
    });

    return {
      total,
      remaining,
      technical
    };
  };

  const { boxRepository } = repository;

  useEffect(() => {
    const newData: DataTableBox[] = boxList.map((box) => {
      const { unitOfMeasurement } = box.attributes.device;
      const { total, remaining, technical } = getFragments(
        box.fragments,
        unitOfMeasurement ?? ''
      );
      return {
        key: box.attributes._id,
        name: box.attributes.device.device,
        identifiers: box.attributes.dataCollected ?? [],
        state: box.attributes.device.state ?? '',
        total: `${box.attributes?.totalMaterial ?? 0} ${
          unitOfMeasurement ?? ''
        }`,
        remaining: `${box.attributes?.remainingMaterial ?? 0} ${
          unitOfMeasurement ?? ''
        }`,
        remainingFragment: remaining,
        technicalFragment: technical,
        totalFragment: total,
        data: box
      };
    });

    setDataTable(newData);
  }, [boxList]);

  const onClickRow = (record: DataTableBox) => {
    return {
      onClick: () => {
        setItemSelected(record);
        setViewDrawer(true);
      }
    };
  };

  const onClickCell: OnClickCell =
    (nonClickableColumn?: boolean) => (record: DataTableBox) => {
      if (nonClickableColumn) return undefined;
      return {
        onClick: () => {
          setItemSelected(record);
          setViewDrawer(true);
        }
      };
    };

  const handleEdit = (boxToEdit: ResponseBox) => {
    console.log('boxToEdit -->', boxToEdit);
    setValueToEdit(boxToEdit);
    setViewModal(true);
  };

  const handleDelete = (id: string) => {
    const hide = message.loading('Eliminando caja');
    boxRepository
      ?.delete(id)
      .then((deleted) => {
        if (deleted) {
          const newBoxList = boxList.filter(
            (item) => item.attributes._id !== id
          );
          setBoxList(newBoxList);
        }
      })
      .finally(() => {
        hide();
      });
  };

  const openModal = () => setViewModal(true);
  const closeModal = () => setViewModal(false);

  return {
    dataTable,
    rowSelection,
    viewModal,
    valueToEdit,
    actions: {
      onClickRow,
      handleEdit,
      handleDelete,
      openModal,
      closeModal,
      disableDeleteButton: canItBeFragmented,
      onClickCell
    }
  };
};

export default useTableBox;
