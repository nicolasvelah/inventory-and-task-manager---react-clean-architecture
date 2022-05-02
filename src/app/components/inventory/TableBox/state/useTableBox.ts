/* eslint-disable object-curly-newline */
import { useEffect, useState } from 'react';
import { FragmentBox } from '../../../../../domain/repositories/box-repository';
import {
  DataTableBox,
  FragmentValue,
  useBoxContext
} from '../../../../context/inventory/BoxContext/BoxContext';

const useTableBox = () => {
  const [dataTable, setDataTable] = useState<DataTableBox[]>([]);

  const { rowSelection, boxList, setItemSelected, setViewDrawer } =
    useBoxContext();

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

  return {
    dataTable,
    rowSelection,
    actions: {
      onClickRow
    }
  };
};

export default useTableBox;
