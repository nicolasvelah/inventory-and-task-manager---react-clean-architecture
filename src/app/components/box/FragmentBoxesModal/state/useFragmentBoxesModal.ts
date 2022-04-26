import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../dependecy-injection';
import User from '../../../../../domain/models/user';
import { CreateFragment } from '../../../../../domain/repositories/box-repository';
import { useBoxContext } from '../../../../context/inventory/BoxContext/BoxContext';

const useFragmentBoxesModal = () => {
  const [dataFragment, setDataFragment] = useState<CreateFragment[]>([]);
  const [technicals, setTechnicals] = useState<User[]>([]);

  const {
    itemsSelectedModal,
    setItemsSelectedModal,
    setViewFragmentModal,
    viewFragmentModal,
    setBoxList,
    rowSelection
  } = useBoxContext();

  const { usersRepository, boxRepository } = repository;

  const getTechnocalsAndCoordinators = async () => {
    const hide = message.loading('Obteniendo técnicos');

    usersRepository
      ?.getCoordinatorsAndTechnicals()
      .then((users) => {
        const technicalsFiltered = users.filter(
          (itemTechnical) => itemTechnical.role === 'technical'
        );
        setTechnicals(technicalsFiltered);
      })
      .catch(() => {
        message.error('No se pudo obtener los técnicos');
      })
      .finally(() => {
        hide();
      });
  };

  useEffect(() => {
    getTechnocalsAndCoordinators();
  }, []);

  useEffect(() => {
    setDataFragment([]);
  }, [itemsSelectedModal]);

  const handleCancel = () => {
    setViewFragmentModal(false);
    setItemsSelectedModal([]);
  };

  const handleOpen = () => {
    setViewFragmentModal(true);
  };

  const onChangeBox =
    (idBox: string) => (values: { technical: string; quantity: number }) => {
      const newDataFragment = [...dataFragment];
      const itemFragemntIndex = newDataFragment.findIndex(
        (element) => element.boxId === idBox
      );

      if (itemFragemntIndex > -1) {
        const item = newDataFragment[itemFragemntIndex];
        newDataFragment[itemFragemntIndex] = {
          ...item,
          quantity: values.quantity ?? item.quantity,
          userId: values.technical ?? item.userId
        };
      } else {
        newDataFragment.push({
          boxId: idBox,
          quantity: values.quantity ?? 1,
          userId: values.technical
        });
      }

      setDataFragment(newDataFragment);
    };

  const getBoxes = () => {
    boxRepository?.getAll().then((response) => {
      setBoxList(response);
    });
  };

  const handleFragment = () => {
    console.log('dataFragment -->', dataFragment);
    const wrongElement = dataFragment.find((item: any) => {
      return !!Object.keys(item).find((key) => item[key] === undefined);
    });
    if (dataFragment.length === 0 || wrongElement) {
      message.error(
        'No se puede fragmentar. Revise que todos los elementos sean correctos'
      );

      return;
    }
    const hide = message.loading('Fragmentando cajas ...');
    boxRepository
      ?.createFragment({ data: dataFragment })
      .then(() => {
        rowSelection.onChange({}, []);
        getBoxes();
        message.success('Cajas fragmetadas');
        handleCancel();
      })
      .catch(() => {
        message.error('Error al fragmetar ccajas');
      })
      .finally(() => {
        hide();
      });
    console.log('dataFragment after -->', dataFragment);
  };

  return {
    visibleModal: viewFragmentModal,
    itemsSelectedModal,
    technicals,
    actions: {
      handleCancel,
      handleOpen,
      handleFragment,
      onChangeBox
    }
  };
};

export default useFragmentBoxesModal;
