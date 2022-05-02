import { DataTableBox } from '../../../../context/inventory/BoxContext/BoxContext';

const useDrawerDetailBox = (item: DataTableBox | null) => {
  const verifyIfCanItBeFragmented = () => {
    const total = item?.data.attributes.totalMaterial ?? 0;

    const remaining =
      item?.totalFragment.reduce((accum, current) => {
        return accum + (Number(current.value) ?? 0);
      }, 0) ?? 0;

    const maxToAssign = total - remaining;

    console.log('maxToAssign -->', maxToAssign);

    return maxToAssign > 0;
  };

  return {
    canItBeFragmented: verifyIfCanItBeFragmented()
  };
};

export default useDrawerDetailBox;
