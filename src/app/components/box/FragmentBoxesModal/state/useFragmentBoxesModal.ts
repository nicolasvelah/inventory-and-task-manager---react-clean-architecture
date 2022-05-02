import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../../dependecy-injection';
import User from '../../../../../domain/models/user';
import { CreateFragment } from '../../../../../domain/repositories/box-repository';
import { DataTableBox } from '../../../../context/inventory/BoxContext/BoxContext';

const useFragmentBoxesModal = ({
  itemsToFragment,
  onSubmitFragment
}: {
  itemsToFragment: DataTableBox[];
  onSubmitFragment?: () => void;
}) => {
  const [dataFragment, setDataFragment] = useState<CreateFragment[]>([]);
  const [technicals, setTechnicals] = useState<User[]>([]);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const { usersRepository, boxRepository } = repository;

  const getTechnicalsAndCoordinators = async () => {
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
    getTechnicalsAndCoordinators();
  }, []);

  useEffect(() => {
    setDataFragment([]);
  }, [itemsToFragment]);

  const handleCancel = () => {
    setVisibleModal(false);
  };

  const handleOpen = () => {
    setVisibleModal(true);
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

  const handleFragment = () => {
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
        if (onSubmitFragment) {
          onSubmitFragment();
        }

        message.success('Cajas fragmetadas');
        handleCancel();
      })
      .catch(() => {
        message.error('Error al fragmetar ccajas');
      })
      .finally(() => {
        hide();
      });
  };

  return {
    visibleModal,
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
