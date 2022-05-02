/* eslint-disable implicit-arrow-linebreak */
import Place from '../../../../../domain/models/place';
import User from '../../../../../domain/models/user';
import { DataTableBox } from '../../../../context/inventory/BoxContext/BoxContext';

const useDrawerDetailBox = (item: DataTableBox | null) => {
  const verifyIfCanItBeFragmented = () => {
    const total = item?.data.attributes.totalMaterial ?? 0;

    const remaining =
      item?.totalFragment.reduce((accum, current) => {
        return accum + (Number(current.value) ?? 0);
      }, 0) ?? 0;

    const maxToAssign = total - remaining;

    return maxToAssign > 0;
  };

  const buildDetailInventory = () => {
    const data: string[] = [];
    item?.data.fragments.forEach((itemFragment) => {
      const stringList = itemFragment.inventory.map(
        (itemInventory) =>
          `${itemInventory.spentMaterial} ${
            item.data.attributes.device.unitOfMeasurement
          } usado en ${(itemInventory.place as Place).name} por ${
            (itemInventory.user as User).name
          } ${(itemInventory.user as User).lastName}`
      );
      data.push(...stringList);
    });
    return data;
  };
  return {
    canItBeFragmented: verifyIfCanItBeFragmented(),
    dataSource: buildDetailInventory()
  };
};

export default useDrawerDetailBox;
