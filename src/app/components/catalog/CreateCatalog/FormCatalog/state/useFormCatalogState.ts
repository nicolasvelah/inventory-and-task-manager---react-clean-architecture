/* eslint-disable no-unused-vars */
const useFormCatalogState = () => {
  const onFinishForm = async (values: any) => {
    console.log('values -->', values);
  };

  const onValuesChange = (value: { [k: string]: any }) => {
    console.log('value -->', value);
  };

  return {
    actions: {
      onFinishForm,
      onValuesChange
    }
  };
};

export default useFormCatalogState;
