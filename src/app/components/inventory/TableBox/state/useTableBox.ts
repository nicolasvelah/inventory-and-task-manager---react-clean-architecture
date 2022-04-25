import { useEffect, useState } from 'react';
import { FragmentBox } from '../../../../../domain/repositories/box-repository';
import {
  DataTableBox,
  useBoxContext
} from '../../../../context/inventory/BoxContext/BoxContext';

const useTableBox = () => {
  const [dataTable, setDataTable] = useState<DataTableBox[]>([]);

  const { rowSelection, boxList } = useBoxContext();

  const getFragments = (
    fragment?: FragmentBox[],
    unitOfMeasurement?: string
  ) => {
    const fragmentConverted = fragment?.map((item) => {
      const total = item.attributes.totalFragment;
      const remaining = item.inventory?.reduce((accum, current) => {
        return accum + (current.spentMaterial ?? 0);
      }, 0);

      let technical;

      if (
        item.inventory.length > 0 &&
        typeof item.inventory[0].user === 'object'
      ) {
        const { user } = item.inventory[0];

        technical = `${user.name} ${user.lastName}`;
      }

      return {
        total,
        remaining,
        technical,
        unitOfMeasurement
      };
    });

    return fragmentConverted ?? [];
  };

  useEffect(() => {
    const newData: DataTableBox[] = boxList.map((box, index) => {
      const { unitOfMeasurement } = box.attributes.device;

      return {
        // key: box.attributes.device._id,
        key: `${index}-${box.attributes.device._id}`,
        fragment: getFragments(box.fragments, unitOfMeasurement),
        identifiers: box.attributes.dataCollected ?? [],
        state: box.attributes.device.state ?? '',
        total: `${box.attributes?.totalMaterial ?? 0} ${
          unitOfMeasurement ?? ''
        }`,
        remaining: `${box.attributes?.remainingMaterial ?? 0} ${
          unitOfMeasurement ?? ''
        }`
      };
    });

    setDataTable(newData);
  }, [boxList]);

  return {
    dataTable,
    rowSelection
  };
};

export default useTableBox;
