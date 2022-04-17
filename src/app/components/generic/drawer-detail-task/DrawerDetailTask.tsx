import React from 'react';
import { Drawer, Tag } from 'antd';
import DetailTask from '../detail-task/DetailTask';
import Task from '../../../../domain/models/task';

import { DetailTaskProps, DataHeaderTask } from './DrawerDetalTask.interfaces';

const DrawerDetailTask: React.FC<DetailTaskProps> = ({
  activeTask,
  onCloseDrawer,
  visibleDrawer
}) => {
  const getStateTask = (task: Task | null): DataHeaderTask | null => {
    if (!task) return null;
    if (task.closedDate) {
      return { title: 'Cerrado', color: 'red' };
    }
    if (task.arrivalDate) {
      return { title: 'Arrivo', color: 'orange' };
    }
    return { title: 'Por ejecutar', color: 'green' };
  };

  const activeTaskState = getStateTask(activeTask);

  const renderTitleDrawer = () => {
    return activeTask && activeTaskState ? (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <b>{`Tarea ${activeTask._id}`}</b>
        <Tag color={activeTaskState.color}>{activeTaskState.title}</Tag>
      </div>
    ) : undefined;
  };

  return (
    <Drawer
      title={renderTitleDrawer()}
      width={520}
      closable={false}
      onClose={onCloseDrawer}
      visible={visibleDrawer}
    >
      <DetailTask task={activeTask} />
    </Drawer>
  );
};

export default DrawerDetailTask;
